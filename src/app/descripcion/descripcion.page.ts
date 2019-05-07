import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {

  modalTitle: string;
  srcImage: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.srcImage = "assets/img/" + this.navParams.data.srcImage + ".jpg";
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
