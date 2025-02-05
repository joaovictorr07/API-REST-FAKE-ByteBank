import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor(private TransferenciaService: TransferenciaService, private router: Router){}

    transferir() {
        console.log('Solicitada nova transferência');

        const valorEmitir: Transferencia = {
          valor: this.valor,
          destino: this.destino
        };

        this.TransferenciaService.adicionar(valorEmitir).subscribe((resultado) =>{
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.log(error))

    }

    limparCampos () {
        this.valor = 0;
        this.destino = 0;
    }
}
