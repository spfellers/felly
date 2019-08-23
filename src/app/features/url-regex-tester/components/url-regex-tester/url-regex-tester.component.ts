import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fel-url-regex-tester',
  templateUrl: './url-regex-tester.component.html',
  styleUrls: ['./url-regex-tester.component.css']
})
export class UrlRegexTesterComponent implements OnInit {
  public urlForm: FormGroup;

  constructor() { 
      this.urlForm = new FormGroup({
        url: new FormControl('')
      });
  }

  public ngOnInit() {}

  public onCheck() {
    const url = this.urlForm.get('url').value;
    console.log(url);
  }

}
