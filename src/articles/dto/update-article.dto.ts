export class UpdateArticleDto {
  readonly title: string;
  readonly author_id: number;
  readonly description: string;
  readonly raw_content: string;
  readonly content: string;
}
