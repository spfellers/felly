import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fel-url-regex-tester',
  templateUrl: './url-regex-tester.component.html',
  styleUrls: ['./url-regex-tester.component.css']
})
export class UrlRegexTesterComponent implements OnInit {
  public rgxForm: FormGroup;
  public validMatches = [];
  public invalidMatches = [];
  public falsePositives = [];
  public falseNegatives = [];
  public validUrls = [
    'http://www.example.com/bag?aunt=bee&bedroom=bomb#books',
    'http://beef.example.com/boundary.html#advice',
    'http://example.com/',
    'https://arch.example.com/belief.html',
    'http://www.example.org/bedroom',
    'https://bee.example.com/bead?addition=arm',
    'https://www.google.com/',
    'http://www.example.net/afternoon?authority=bike&box=basketball',
    'http://www.foufos.gr',
    'https://www.foufos.gr',
    'http://foufos.gr',
    'http://www.foufos.gr/kino',
    'http://werer.gr',
    'www.foufos.gr',
    'www.mp3.com',
    'www.t.co',
    'http://t.co',
    'http://www.t.co',
    'https://www.t.co',
    'www.aa.com',
    'http://aa.com',
    'http://www.aa.com',
    'https://www.aa.com'
  ];

  public invalidUrls = [
  'http://',
  'http://.',
  'http://..',
  'http://../',
  'http://?',
  'http://??',
  'http://??/',
  'http://#',
  'http://##',
  'http://##/',
  'http://foo.bar?q=Spaces should be encoded',
  '//',
  '//a',
  '///a',
  '///',
  'http:///a',
  'foo.com',
  'rdar://1234',
  'h://test',
  'http:// shouldfail.com',
  ':// should fail',
  'http://foo.bar/foo(bar)baz quux',
  'ftps://foo.bar/',
  'http://-error-.invalid/',
  'http://-a.b.co',
  'http://a.b-.co',
  'http://0.0.0.0',
  'http://3628126748',
  'http://.www.foo.bar/',
  'http://www.foo.bar./',
  'http://.www.foo.bar./'
  ]

  constructor() { 
      this.rgxForm = new FormGroup({
        rgx: new FormControl('')
      });
  }

  public ngOnInit() {}

  public onCheck() {
    const input = this.rgxForm.get('rgx').value;
    const regex = new RegExp(`^${input}$`);
    this.validMatches = this.validUrls.filter(url => regex.test(url));
    this.falseNegatives = this.validUrls.filter(url => !regex.test(url));
    this.invalidMatches = this.invalidUrls.filter(url => !regex.test(url));
    this.falsePositives = this.invalidUrls.filter(url => regex.test(url));
    console.log(`Submit REGEX: ${input};`);
  }

}
