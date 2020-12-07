import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './tabla.component';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { IIndicador } from 'src/app/interfaces/interfaces';


describe('Pruebas component NavComponent', () => {

  let componente: TablaComponent;
  const servicio = new IndicadoresService(null);
  const respuesta: IIndicador = {
    key: "cobre",
    name: "Precio del Cobre, dólares por libra",
    unit: "dolar",
    date: 1584489600,
    value: 2.39
  };

  beforeEach(() => {
    componente = new TablaComponent(servicio);
  });


  it('Debe obtener la carga completa al invocar ngOnInit', () => {
    spyOn(servicio, 'getIndicadores').and.callFake(() => {
      return of(respuesta);
    });
    componente.ngOnInit();
    expect(componente.dataSource).toBeTruthy();
  });

  it('Cuando el servicio retorne un error', () => {
    spyOn(servicio, 'getIndicadores').and.returnValue(throwError({ error: 'error' }));
    componente.ngOnInit();
    expect(componente.error).toBeTruthy();
  });
});



