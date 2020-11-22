import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {orders} from '../orderList';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private activateroute: ActivatedRoute) { }

  orderInfo = orders;
  customerName: string='';
  requiredOrder: any;
  ngOnInit(): void {
    this.activateroute.queryParams.subscribe(param=>{
      this.customerName = param.customerName;
    });

    for(var i=0;i<this.orderInfo.length;i++){
      if(this.customerName === this.orderInfo[i].customerName){
        this.requiredOrder = this.orderInfo[i];
        break;
      }
    }

  }

}
