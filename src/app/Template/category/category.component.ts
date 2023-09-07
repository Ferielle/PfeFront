import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component,Input,OnInit  } from '@angular/core';
import { Category } from 'src/app/Model/Category';
import { CategoryService } from 'src/app/Service/CategoryService/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent  implements OnInit  {
  
  items: {id:null, Label: string ;}[];
  currentTutorial :Category;
  functionData:any
  constructor(private http: HttpClient,private CatgoryService: CategoryService) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.CatgoryService.getAll()
      .subscribe(data => {
        this.items = data as {id:null, Label: string }[];
      });
  }


  addItem(Label: string) {
    const newItem: Category = {Id: null,Label};
    this.CatgoryService.add(newItem)
      .subscribe(() => {
        this.fetchItems(); // Refresh the list after adding
      });
  }
  deleteFunction(id: any): void {
    this.CatgoryService.delete(id)
      .subscribe(
        () => {
console.log("success")        
},
        (error) => {
console.log("error")        
}
      );
  }
  getFunctionById(id: any): void {
    this.CatgoryService.getCategoryById(id)
      .subscribe(
        (response) => {
          this.functionData = response; // Store the retrieved function in a component variable
          console.log(id)
        },
        (error) => {
          // Handle error (e.g., display error message)
        }
      );
  }
  }


