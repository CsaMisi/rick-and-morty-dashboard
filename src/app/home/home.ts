import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
