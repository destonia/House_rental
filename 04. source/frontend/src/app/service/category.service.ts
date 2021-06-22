import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }
  // categories: Category[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  // }];

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`)
  }
  save(category: Category[]): Observable<Category[]>{
    return this.http.post<Category[]>(`${environment.apiUrl}/categories/create`,category)
  }
}

