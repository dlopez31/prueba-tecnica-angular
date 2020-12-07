import { Location } from "@angular/common";
import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes, RouterOutlet } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component';
import { IndicadoresService } from './services/indicadores.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';


describe('Puebas Router:app', () => {
  let location: Location;
  let router: Router;
  let fixture;

  const routes: Routes = [
    { path: 'monedas', component: TablaComponent },
    {
      path: '**',
      redirectTo: 'monedas'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatProgressSpinnerModule,
        MatTableModule, RouterTestingModule.withRoutes(routes)],
      declarations: [
        TablaComponent,
        AppComponent,
        ProgressComponent,
      ], providers: [IndicadoresService]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });

  });

  it('Navega a la ruta monedas', async () => {
    const success = await fixture.ngZone.run(() => router.navigateByUrl('monedas'));
    expect(success).toBeTruthy();
    expect(location.path()).toBe('/monedas');
  });

  it('Debe de tener un router-outlet', async () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });
});