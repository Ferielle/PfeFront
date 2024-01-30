export class Order {
    Id:number;
    Date:Date;
    Status:string;
    tva: number;
  

  constructor(id, date, status, tva) {
    this.Id = id;
    this.Date = date;
    this.Status = status;
    this.tva = tva;
  }
  }