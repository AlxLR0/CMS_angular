import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  isSidebarOpen = false; // Puedes establecerlo en false si deseas que esté cerrado por defecto

  toggleSidebar(): void {
    console.log('Toggle sidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('isSidebarOpen:', this.isSidebarOpen);
  }
  
}
