import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit,OnDestroy {
  private id;
  sub:any;



  constructor(private route: ActivatedRoute)
   {

   }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
