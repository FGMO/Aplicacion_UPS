import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarreraInterface } from '../models/carrera.interface';
import { CarreraService } from '../services/carrera.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.page.html',
  styleUrls: ['./carrera.page.scss'],
})
export class CarreraPage implements OnInit{

  lista: CarreraInterface[];
  constructor(private listService: CarreraService) { }

  ngOnInit() {
    this.listService.getLista().subscribe(res => this.lista = res)
  }

}
