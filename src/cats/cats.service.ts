import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ICat } from './interfaces/cat.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<CreateCatDto> {
    await this.catRepository.save(createCatDto);
    return createCatDto;
  }

  async findAll(): Promise<ICat[]> {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return this._findOneOrFail(id);
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    await this._findOneOrFail(id);
    return await this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    await this._findOneOrFail(id);
    return await this.catRepository.delete(id);
  }

  async _findOneOrFail(id: number) {
    const _cat = await this.catRepository.findOne({ where: { id } });
    if (_cat === null) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return _cat;
  }
}
