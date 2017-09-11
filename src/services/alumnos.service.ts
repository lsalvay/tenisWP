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
}