import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private TransferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.TransferenciaService.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
