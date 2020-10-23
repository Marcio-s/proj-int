import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  lista : Cliente[] = [];

  constructor(private clienteServ : ClienteService,
  private navCtrl : NavController) { }


  ngOnInit() {
    this.clienteServ.listaDeClientes().subscribe(response=>{
      // O servidor respondeu 
    console.log(response);
      this.lista = response;

      },err=>{

  })
  
}
  visualizar(cliente){
    this.navCtrl.navigateForward(['/clientes-visualizar',cliente.id])

  }

}