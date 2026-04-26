import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard";

@Component({
  selector: 'app-home',
  imports: [DashboardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
