import { Injectable } from '@angular/core';

@Injectable()
export class AlumnosService{
	alumnos = [
		{id:1, nombre:'Luis', apellido:'Salvay'},
		{id:2, nombre:'Juan Cruz', apellido:'Salvay'},
		{id:3, nombre:'Mariana', apellido:'Gonzalez'}
	];
	public getAlumnos(){
		return this.alumnos;
	}
	public getAlumno(id){
		return this.alumnos.filter(function(e, i){
			return e.id == id})[0] || {id: null, nombre: null, apellido: null};
	}
	public crearAlumno(alumno){
		this.alumnos.push(alumno);
	}
	public editarAlumno(alumno){
		for(let i; i < this.alumnos.length; i++){
			if(this.alumnos[i].id == alumno.id){
				this.alumnos[i] = alumno
			}
		}
	}
}