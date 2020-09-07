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
  public async putContent(content){
    return this.httpClient.put("http://localhost:3000/dev/content",content).toPromise();
  }
}
