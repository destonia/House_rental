import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id!: any
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.categoryService.delete(this.id)
    }
    );
  }

  ngOnInit(): void {
  }

}
