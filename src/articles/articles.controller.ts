import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseIntPipe) articleId: number,
  ): Promise<Article> {
    return this.articleService.findById(articleId);
  }

  @Post()
  create(@Body() articleData: CreateArticleDto) {
    return this.articleService.create(articleData);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) articleId: number,
    @Body() articleData: UpdateArticleDto,
  ) {
    return this.articleService.update(articleId, articleData);
  }
}
