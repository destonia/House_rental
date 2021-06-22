import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  category: Category[] = [];
  content = new FormControl();
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
  })
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    const res = this.categoryService.save(category).subscribe(() => {
      this.categoryForm.reset();
      alert('success')
    },
      e => {
        console.log(e);
      });
  }
}
