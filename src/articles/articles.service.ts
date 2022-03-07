import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  findById(id: number): Promise<Article> {
    return this.articleRepository.findOne(id);
  }

  async create(articleData: CreateArticleDto) {
    const plainArticleData = instanceToPlain(articleData);
    await this.articleRepository.save(
      plainToInstance(Article, {
        ...plainArticleData,
        author: plainArticleData.author_id,
      }),
    );
  }
}
