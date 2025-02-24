import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {JwtService} from './service/jwt.service';
import {FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}



  onSubmit() {
    this.snackBar.open('Registration successful!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }

}
