import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlumnosService } from '../../services/alumnos.service';
/**
 * Generated class for the AlumnoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumno-detalle',
  templateUrl: 'alumno-detalle.html',
})
export class AlumnoDetallePage {
	alumno = {id: null, nombre: null, apellido: null};
	id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alumnosService: AlumnosService) {
   this.id = navParams.get('id');
   if(this.id != 0){
   		alumnosService.getAlumno(this.id)
   			.subscribe(alumno => {
   				this.alumno = alumno;
   			})		
   }
   
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnoDetallePage');
  }

  agregarAlumno(){
  	if(this.id != 0){
  		//estamos editando
  		this.alumnosService.editarAlumno(this.alumno);
	  	alert("Alumno editado con exito!");
  	}else{

	  	this.alumno.id = Date.now();
	  	this.alumnosService.crearAlumno(this.alumno);
	  	alert("Alumno creado con exito!");
  	}
  	this.navCtrl.pop();
  }
  eliminarAlumno(){
  	this.alumnosService.eliminarAlumno(this.alumno);
  	alert("Alumno eliminado con exito!");
  	this.navCtrl.pop();
  }

}
