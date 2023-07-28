import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent {

// public user: User | null = null  

constructor (private activatedroute: ActivatedRoute) {
  (this.activatedroute.snapshot.params ['id'])
}

// loadUser(): void {}


}
