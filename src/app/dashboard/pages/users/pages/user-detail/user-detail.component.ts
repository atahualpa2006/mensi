import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})

export class UserDetailComponent implements OnInit {
  user!: any;

  ngOnInit(): void {
    const storedObjectString = localStorage.getItem('userData');

    if (storedObjectString !== null) {
      // Convertir la cadena JSON a un objeto
      this.user = JSON.parse(storedObjectString);
      console.log(this.user); // Mostrará el objeto recuperado
    } else {
      // Manejar el caso cuando no se encuentra ningún dato en el localStorage
      console.log('No se encontraron datos almacenados en el localStorage.');
    }
  }
}
