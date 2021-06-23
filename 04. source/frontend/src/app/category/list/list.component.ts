import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category: any;
  categories!: any;
  deleteName!: any;
  deleteId!: any;

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
  get(id: any) {
    return this.categoryService.findById(id).subscribe(category => {
      this.category = category;
      console.log(this.category);

      this.deleteName = this.category.name;
      this.deleteId = this.category.id;
    })
  }
  delete(id: any) {
    return this.categoryService.delete(id).subscribe(()=>{
      location.reload()
      
    })
  }
}
