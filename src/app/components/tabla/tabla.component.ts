import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { IIndicador } from './../../interfaces/interfaces';
import { IndicadoresService } from './../../services/indicadores.service';

@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
  public error: boolean = false;
  public loadin: boolean = true;
  public displayedColumns: string[] = ['key', 'name', 'unit', 'date', 'value'];
  public dataSource: IIndicador[];

  constructor(private indicadorService: IndicadoresService) { }

  ngOnInit(): void {
    this.error = false;
    this.indicadorService.getIndicadores()
      .subscribe((data: Object) => {
        console.log(data);
        this.dataSource = Object.values(data);


        this.loadin = false;
      }, (err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.error = true;
        this.loadin = false;
      }, () => this.loadin = false);
  }
}
