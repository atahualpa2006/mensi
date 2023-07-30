import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})
export class UserDetailComponent implements OnInit {
  user!: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.user = params; // Convertimos el string a objeto usuario
      }
    });
  }

  ngOnInit(): void {
    console.log(this.user);
  }
}
