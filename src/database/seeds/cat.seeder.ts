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
    if (count > 0) return;

    const catFactory = factoryManager.get(Cat)
    await catFactory.saveMany(10);
  }
}
