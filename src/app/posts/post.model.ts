export class Post {
  constructor(
    public title:string,
    public body:string,
    public created_at:Date,
    public id?:number,
  ) {}
}
