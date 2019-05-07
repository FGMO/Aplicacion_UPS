import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../models/proyecto.interface';
import { ProyectoService } from '../services/proyecto.service';
import { CarreraInterface } from '../models/carrera.interface';
import { CarreraService } from '../services/carrera.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DescripcionPage } from '../descripcion/descripcion.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.page.html',
  styleUrls: ['./proyecto.page.scss'],
})
export class ProyectoPage implements OnInit {

  lista: ProyectoInterface[];
  id = null;
  nombre = "";

  constructor(private listService: ProyectoService, private carreraService: CarreraService, private router: Router,
    private route: ActivatedRoute, public modalController: ModalController) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.carreraService.getCarrera(this.id).subscribe(res => res.map(async (datos)=> this.nombre = datos.nombre));
    this.listService.getLista(this.id).subscribe(res => this.lista = res);
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: DescripcionPage,
      componentProps: {
        "srcImage": this.id,
        "paramTitle": this.nombre
      }
    });
    return await modal.present();
  }

}
