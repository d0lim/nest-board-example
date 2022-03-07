export class CreateArticleDto {
  readonly title: string;
  readonly description: string;
  readonly author_id: number;
  readonly raw_content: string;
  readonly content: string;
}
