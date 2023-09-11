import { Products } from "./Products";
 

export class ProductImage {
    Id:number | null;
    FileName:string;
    URL:string;
    Picture: string;
    DefaultImage:string
constructor(id: number | null, fileName: string,url: string, Picture:string,DefaultImage:string) {
    this.Id = id;
    this.FileName = fileName;
    this.URL = url;
    this.Picture=Picture;
    this.DefaultImage=DefaultImage
  }   
  }