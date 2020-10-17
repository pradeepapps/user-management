import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management';

  constructor(private userService: UserService) {

  }

  isAuthenticated() {
    const isAuthenticated = this.userService.isAuthenticated();
    return isAuthenticated;
  }
}
