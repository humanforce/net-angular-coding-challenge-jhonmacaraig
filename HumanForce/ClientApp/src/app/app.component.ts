import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private readonly router: Router) {

  }

  ngOnInit(): void {
    this.router.navigate(['app/user']);
  }
}
