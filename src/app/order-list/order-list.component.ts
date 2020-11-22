import { Component, OnInit} from '@angular/core';
import {orders} from '../orderList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ordersInfo = orders;
  changeStatus(i) {
    event.stopPropagation();
    switch(orders[i].orderStatus){
      case 'Order Received':
        orders[i].orderStatus = 'Preparing';
        break;
      case 'Preparing':
        orders[i].orderStatus = 'Ready to serve';
        break;
      
    }
  }

  goToOrderDetails(customerName){
    this.route.navigate(['details'], {queryParams: {customerName}});
  }

}
