import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlumnosService } from '../../services/alumnos.service'
import { AlumnoDetallePage } from '../alumno-detalle/alumno-detalle'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alumnos = [];
  constructor(public navCtrl: NavController, public alumnosService : AlumnosService) {
  	this.alumnos = alumnosService.getAlumnos();
  }

  public goToAlumnoDetalle(){
  	this.navCtrl.push(AlumnoDetallePage)
  }

}
