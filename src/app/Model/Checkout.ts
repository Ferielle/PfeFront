export class Checkout {
  Id: number;
  Receiver: string;
  Phone: number;
  Date: Date;
  Email: string;
  Country: string;
  City: string;
  Address: string;
  Apartement: string;
  PostCode: number;
  OrderNotes: string;
  ShoppingCartId: number;

  constructor(
    id: number,
    receiver: string,
    phone: number,
    date: Date,
    email: string,
    country: string,
    city: string,
    address: string,
    apartement: string,
    postcode: number,
    ordernotes: string,
    shoppingcartid: number
  ) {
    this.Id = id;
    this.Receiver = receiver;
    this.Phone = phone;
    this.Date = date;
    this.Email = email;
    this.Country = country;
    this.City = city;
    this.Address = address;
    this.Apartement = apartement;
    this.PostCode = postcode;
    this.OrderNotes = ordernotes;
    this.ShoppingCartId = shoppingcartid;
  }
}
