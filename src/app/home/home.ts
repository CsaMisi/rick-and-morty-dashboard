import { Component, inject } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { SidebarService } from '../core/services/sidebar.service';
import { NgClass, NgStyle } from '@angular/common';
import { RecentlyViewedService } from '../core/services/recently-viewed.service';

@Component({
  selector: 'app-home',
  imports: [NgStyle, NgClass, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  Sidebar : SidebarService = inject(SidebarService);
  readonly RecentlyViewed = inject(RecentlyViewedService);
}
