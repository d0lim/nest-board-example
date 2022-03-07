import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  @Get()
  findAll(): Article[] {
    return [] as Article[];
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) articleId: number): Article {
    return { id: articleId } as Article;
  }
}
