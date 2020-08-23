import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  public async getContentList(){
    return this.httpClient.get("http://localhost:3000/dev/content").toPromise();
  }
}
