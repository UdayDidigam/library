import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

const routes: Routes = [
  {path: 'publishers/add', component: AddPublisherComponent},
  {path: 'publishers/list', component: PublisherListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
