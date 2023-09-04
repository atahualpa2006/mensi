import { Component, OnInit } from '@angular/core';
import { Alumns } from './models';
import { AlumnService } from './alumn.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styles: [
  ]
})
export class AlumnsComponent implements OnInit {

public dataSource: Alumns []= [];

public displayedColumns = ['id', 'dni', 'name','surname', 'career'] ;

public data$: Observable <Alumns[]>;

constructor(private alumnService: AlumnService) {

  this.data$ = this.alumnService.getAlumns();
}

ngOnInit(): void {

  this.alumnService.loadAlumns();

  // los obtengo

this.alumnService.getAlumns().subscribe({
  next:(data) => console.log('data: ', data)
});

}

onCreate(): void {

}

}
