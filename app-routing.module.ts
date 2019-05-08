import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentOneComponent} from './component-one/component-one.component';
import {ComponentTwoComponent} from './component-two/component-two.component';
import {ChildOneComponent} from './child-one/child-one.component';
import {ChildTwoComponent} from './child-two/child-two.component';
import { ComponentAuxComponent } from './component-aux/component-aux.component';

const routes: Routes = [

  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two/:id', component: ComponentTwoComponent ,

  children: [
    { path: '', redirectTo: 'child-one', pathMatch: 'full' },
    { path: 'child-one', component: ChildOneComponent },
    { path: 'child-two', component: ChildTwoComponent }
  ]

},

{path:'component-aux',component:ComponentAuxComponent, outlet:'sidebar'}
];


  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
