import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private cs:ContentService) { }
  data;
 
  async ngOnInit()  {
    this.data = await this.cs.getContentList();
  }

}
