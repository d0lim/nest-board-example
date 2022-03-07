import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  findAll(): Article[] {
    return [] as Article[];
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) articleId: number): Article {
    return { id: articleId } as Article;
  }

  @Post()
  create(@Body() articleData: CreateArticleDto) {
    return this.articleService.create(articleData);
  }
}
