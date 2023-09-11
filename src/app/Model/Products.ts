import { SafeUrl } from "@angular/platform-browser";
import { ProductImage } from "./ProductImage";

export class Products {
    Id:number|null;
    Label:string;
    PriceOOt:number;
    Quantity:number;
    Discountid:number;
    Brandid:number;
    SubCategoryid:number;
    ShopFeatureid:number;
    VatId:number;
    img : ProductImage[] ;
    safeUrl: SafeUrl

    constructor(
      Id: number | null,
      Label: string,
      PriceOOt: number,
      Quantity: number,
      Discountid: number,
      Brandid: number,
      SubCategoryid: number,
      ShopFeatureid: number,
      VatId: number,
      img: any,
      safeUrl: SafeUrl
    ) {
      this.Id = Id;
      this.Label = Label;
      this.PriceOOt = PriceOOt;
      this.Quantity = Quantity;
      this.Discountid = Discountid;
      this.Brandid = Brandid;
      this.SubCategoryid = SubCategoryid;
      this.ShopFeatureid = ShopFeatureid;
      this.VatId = VatId;
      this.img = img;
      this.safeUrl = safeUrl;
    }
    
  }