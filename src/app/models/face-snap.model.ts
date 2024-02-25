// export class FaceSnap {
//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imageUrl: string;

//   constructor(
//     title: string,
//     description: string,
//     createdDate: Date,
//     snaps: number,
//     imageUrl: string
//   ) {
//     this.title = title;
//     this.description = description;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//     this.imageUrl = imageUrl;
//   }
// }

//synthaxe plus courte: "public" dit que cette class aura ces propriétés en qu'en plus on pourra les passer comme arguments au constructeur
export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public imageUrl: string
  ) {}
}
