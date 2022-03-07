export class CreateArticleDto {
  constructor(
    title: string,
    description: string,
    author_id: number,
    raw_content: string,
    content: string,
  ) {
    this.title = title;
    this.description = description;
    this.author_id = author_id;
    this.raw_content = raw_content;
    this.content = content;
  }

  readonly title: string;
  readonly description: string;
  readonly author_id: number;
  readonly raw_content: string;
  readonly content: string;
}
