import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './entities/article.entity';

const mockArticleRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('ArticlesService', () => {
  let service: ArticlesService;
  let articleRepository: MockRepository<Article>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(Article),
          useValue: mockArticleRepository(),
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    articleRepository = module.get<MockRepository<Article>>(
      getRepositoryToken(Article),
    );
  });

  describe('create', () => {
    const createData = new CreateArticleDto(
      'Test Title 1',
      'Test Description 1',
      1,
      '<h1>Hello World</h1>',
      'Hello World',
    );

    const repositoryData = plainToInstance(Article, {
      title: 'Test Title 1',
      description: 'Test Description 1',
      author: 1,
      raw_content: '<h1>Hello World</h1>',
      content: 'Hello World',
    });

    it.todo('게시물을 만들 수 있어야 합니다.');
    it('게시물을 만들 수 있어야 합니다.', async () => {
      articleRepository.save.mockResolvedValue(createData);
      const result = await service.create(createData);
      expect(articleRepository.save).toHaveBeenCalledTimes(1);
      expect(articleRepository.save).toHaveBeenCalledWith(repositoryData);

      console.log(result);
    });
    it.todo('잘못된 정보로 게시물을 만들려고 하면 예외를 발생시켜야 합니다.');
  });

  describe('update', () => {
    it.todo('게시물을 수정할 수 있어야 합니다.');
    it.todo('잘못된 정보로 게시물을 수정하려고 하면 예외를 발생시켜야 합니다.');
  });
});
