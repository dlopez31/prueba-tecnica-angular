import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { IndicadoresService } from './indicadores.service';

describe('Pruebas Service IndicadoresServices', () => {

    const urlBase = `${environment.urlBase}/last`;
    const mockResponse = {
        cobre: { key: "cobre", name: "Precio del Cobre, dólares por libra", unit: "dolar", date: 1584489600, value: 2.39 },
        dolar: { key: "dolar", name: "Dólar observado", unit: "pesos", date: 1598832000, value: 779.92 },
        euro: { key: "euro", name: "Euro", unit: "pesos", date: 1584489600, value: 938.42 },
        ipc: { key: "ipc", name: "Indice de Precios al Consumidor (Var. c/r al período anterior)", unit: "porcentual", date: 1577836800, value: 1.1 },
        ivp: { key: "ivp", name: "Indice de valor promedio", unit: "pesos", date: 1586390400, value: 29706.22 },
        oro: { key: "oro", name: "Precio del Oro, dólares por onza", unit: "dolar", date: 1584576000, value: 1473.2 },
        plata: { key: "plata", name: "Precio de la Plata, dólares por onza", unit: "dolar", date: 1584576000, value: 11.69 },
        uf: { key: "uf", name: "Unidad de fomento", unit: "pesos", date: 1599609600, value: 28687.77 },
        utm: { key: "utm", name: "Unidad tributaria mensual", unit: "pesos", date: 1583020800, value: 50021 },
        yen: { key: "yen", name: "Yen", unit: "dolar", date: 1584489600, value: 107.33 }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [IndicadoresService]
        });
    });

    describe('Obteniendo data', () => {
        it('Prueba que se obtenga el resultado',
            inject([HttpTestingController, IndicadoresService], (httpMock: HttpTestingController, indicadoresService: IndicadoresService) => {
                indicadoresService.getIndicadores()
                    .subscribe(
                        (res) => {
                            expect(res).toEqual(mockResponse);
                        }
                    );
                const req = httpMock.expectOne(`${urlBase}`);
                expect(req.request.method).toBe('GET');
                req.flush(mockResponse);
            })
        );
    });
});
