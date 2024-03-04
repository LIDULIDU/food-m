import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
