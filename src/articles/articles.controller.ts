import { Controller, Get } from '@nestjs/common';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  @Get()
  findAll(): Article[] {
    return [] as Article[];
  }
}
