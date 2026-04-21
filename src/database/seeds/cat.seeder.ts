import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Cat } from '../../cats/entities/cat.entity';

export class CatSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const repository = dataSource.getRepository(Cat);
    const count = await repository.count();
    if (count === 0) return;

    const cats = [
      { name: 'Whiskers', age: 3, breed: 'Siamese' },
      { name: 'Felix', age: 5, breed: 'Persian' },
      { name: 'Garfield', age: 7, breed: 'Tabby' },
      { name: 'Luna', age: 2, breed: 'Maine Coon' },
      { name: 'Simba', age: 4, breed: 'Bengal' },
      { name: 'Nala', age: 1, breed: 'Ragdoll' },
      { name: 'Oliver', age: 6, breed: 'British Shorthair' },
      { name: 'Milo', age: 3, breed: 'Scottish Fold' },
    ];

    await repository.insert(cats);
  }
}
