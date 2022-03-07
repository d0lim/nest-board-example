import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.find({ relations: ['author'] });
  }

  findById(id: number): Promise<Article> {
    return this.articleRepository.findOne(id, { relations: ['author'] });
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

  async update(articleId: number, articleData: UpdateArticleDto) {
    const article = instanceToPlain(articleData);
    await this.articleRepository.save(
      plainToInstance(Article, { id: articleId, ...article }),
    );
  }
}
