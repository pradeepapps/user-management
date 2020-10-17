import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.max(120)]],
      dob: ['', [Validators.required]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    const user: User = {
      name: this.userForm.get('name').value,
      age: this.userForm.get('age').value,
      dob: this.userForm.get('dob').value
    };

    this.userService.register(user).subscribe(
      res => {
        console.log(res);
        alert('User data submitted successfully.');
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err);
      }
    );
  }

}
