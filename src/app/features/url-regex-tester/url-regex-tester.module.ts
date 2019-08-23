import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UrlRegexTesterRoutingModule } from './url-regex-tester-routing.module';
import { UrlRegexTesterComponent } from './components/url-regex-tester/url-regex-tester.component';

@NgModule({
  declarations: [UrlRegexTesterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UrlRegexTesterRoutingModule
  ]
})
export class UrlRegexTesterModule { }
