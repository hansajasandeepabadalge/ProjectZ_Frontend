import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../service/jwt.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private service: JwtService) { }

  ngOnInit() {
    this.hello()
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
    })
  }
}
