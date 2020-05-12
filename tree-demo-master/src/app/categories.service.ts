import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories;
  constructor(private http: HttpClient) { }

  public loadCategories (children=false) {
    let url = 'http://localhost/api/categories.service.php?action=load-categories';
    url += children ? "&children="+children : '';

    return this.http.get(url);
  }

  public setChildren(categories, category, children) {
    return this.parseChildren(categories, category, children);
  }

  public parseChildren(categories, category, children) {
    for(let i=0; i < categories.length; i++ ) {

      if(categories[i].id == category.id) {
        categories[i].children = children;
        break;
      } else if(categories[i].id != category.id && categories[i].children.length > 0){
        this.parseChildren(categories[i].children, category, children);
      }
    }
    return categories
  }
}
