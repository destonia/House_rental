import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouteConfigLoadEnd, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  id!: any;
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl
  });
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.getCategory(this.id)
    }
    );
  }
  ngOnInit(): void {
  }

  getCategory(id: any) {
    return this.categoryService.findById(this.id).subscribe(category => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name)
      })
    });
  }
  update(id: number) {
    const category: Category = this.categoryForm.value;
    this.categoryService.update(id, category).subscribe((res) => {
      alert('success')
      this.router.navigateByUrl('/admin/category')
      console.log(res)
    },
    e => {
      console.log(e);
      
    });
  }
}
