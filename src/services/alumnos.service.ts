import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class AlumnosService{

	constructor(public afDB: AngularFireDatabase){}
	alumnos = [];
	public getAlumnos(){
		//return this.alumnos;
		return this.afDB.list('alumnos/');
	}
	public getAlumno(id){
		//return this.alumnos.filter(function(e, i){return e.id == id})[0] || {id: null, nombre: null, apellido: null};
		return this.afDB.object('alumnos/'+id);
	}
	public crearAlumno(alumno){
		//this.alumnos.push(alumno);
		this.afDB.database.ref('alumnos/'+alumno.id).set(alumno);
	}
	public editarAlumno(alumno){
		// for(let i=0; i < this.alumnos.length; i++){
		// 	if(this.alumnos[i].id == alumno.id){
		// 		this.alumnos[i] = alumno
		// 	}
		// }
		this.afDB.database.ref('alumnos/'+alumno.id).set(alumno);
	}
	public eliminarAlumno(alumno){
		this.afDB.database.ref('alumnos/'+alumno.id).remove();
		// for(let i=0; i < this.alumnos.length; i++){
		// 	if(this.alumnos[i].id == alumno.id){
		// 		this.alumnos.splice(i, 1);
		// 	}
		// }
	}
}