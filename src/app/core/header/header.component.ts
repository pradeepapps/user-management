import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('/home');
  }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
}
