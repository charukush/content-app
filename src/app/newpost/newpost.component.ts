import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  constructor(private service: ContentService) { }
  profileForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    summary: new FormControl(''),
    detail: new FormControl(''),
  });
  async onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    await this.service.putContent(this.profileForm.value);
    this.profileForm.reset();

  }

  ngOnInit(): void {
  }

}
