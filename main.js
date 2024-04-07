"use strict";
import { Vector3d } from "./vector3d.js";
const a = new Vector3d(1, 2, 1);
const c = new Vector3d(3, 4, 0);
const b = a.copy().add(c);
console.log(b.toString()); //(4, 6 , 1) toString массив координат [x, y, z] объекта выводит строкой
console.log(a.toString(), c.toString(), a.add(c).toString()); //(4, 6, 1) прибавляет c
console.log(a.toString(), c.toString(), a.substract(c).toString()); //(1,2,1) отнимает с
console.log(c.toString(), c.multiplyByScalar(3).toString()); //(9, 12, 0) *3
console.log(b.toString(), b.set(a).toString()); //присваивает b координаты а(1, 2, 1)
const d = a.copy(); //создает новый вектор d с координатами существующего а(1, 2, 1)
console.log(d.toString()); //(1, 2, 1)
console.log(a.toString(), c.toString(), a.scalarMultiplyWith(c)); //33 скалярное произведение векторов
console.log(a.toString(), a.normalize().toString()); //(0.408, 0.816, 0.408) - нормирует вектор с точностью до 3 знаков после .
console.log(a.equals(a)); //true
console.log(a.equals(c)); //false
//errors
//c.multiplyByScalar(a);
//a.length = 1;
//a.coords = [1, 2];
//a.coords = (1, 2);
//const g = new Vector3d(1, 2);
