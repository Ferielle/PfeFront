export class Cart {
    Id:number;
    ProductId: number;
    Quantity:number;
    ShoppingCartId: number;
    constructor(id,productId,quantity,shoppingCartId){
        this.Id=id;
        this.ProductId = productId;
        this.Quantity= quantity;
        this.ShoppingCartId=shoppingCartId;
    }

}