import { setSeederFactory } from 'typeorm-extension';
import { Cat } from '../../cats/entities/cat.entity';

export const CatFactory = setSeederFactory(Cat, (faker) => {
  const cat = new Cat();
  cat.name = faker.animal.cat();
  cat.age = faker.number.int({ min: 1, max: 20 });
  cat.breed = faker.animal.cat();
  return cat;
});
