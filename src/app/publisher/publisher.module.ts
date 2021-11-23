import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';


@NgModule({
  declarations: [
    AddPublisherComponent,
    PublisherListComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
