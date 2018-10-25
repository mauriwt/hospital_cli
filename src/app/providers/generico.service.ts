import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { parametro } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var moment: any;

@Injectable()
export class GenericoService {

  private base = config.APIRest.url.local;
  private formulario: FormGroup;
  private checkboxes: any;
  public storage: any;

  constructor() { }

  public generar(campos) {
    this.formulario = new FormGroup({});
    for (let o of campos) {
      this.formulario.addControl(o.id, new FormControl('', o.validar));
    }
    return this.formulario;
  }

  public getBioIds(data) {
    var ids = [];
    for (var i = 0; i < data.length; i++) {
      ids.push(data[i].bioCodigo);
    }
    return ids.sort();
  }

  public getCodigos(data) {
    var ids = [];
    for (var i = 0; i < data.length; i++) {
      ids.push(data[i].pecCodigo);
    }
    return ids.sort();
  }

  public getIds(data) {
    var ids = [];
    for (var i = 0; i < data.length; i++) {
      ids.push({ codigo: data[i].codigo, corPersona: data[i].corPersona, fecha: data[i].fecha });
    }
    return ids.sort(this.orderBy('fecha'));
  }

  public splitCodigo(data) {
    var ids = [];
    var enteIds = [];
    for (var i = 0; i < data.length; i++) {
      ids.push(data[i].codigo);
      enteIds.push(data[i].corPersona);
    }
    return [ids, enteIds, data[0].fecha, data[data.length - 1].fecha];
  }

  public checkAll() {
    this.checkboxes = document.getElementsByName('check');
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].checked = true;
    }
  }

  public noCheckAll() {
    this.checkboxes = document.getElementsByName('check');
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].checked = false;
    }
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

 /*  formatoDia(fecha) {
    return fecha.toLocaleDateString("es-EC", parametro.options);
  }

  formatoTiempo(fecha) {
    return fecha.toLocaleDateString("es-EC", parametro.tiempo);
  } */

  timeConvert(data) {
    let minutos = data % 60;
    let horas = (data - minutos) / 60;
    return `${horas > 9 ? horas : '0' + horas} : ${minutos > 9 ? minutos : '0' + minutos} min`;
  }

  minutosHoras(data) {
    let minutos = data % 60;
    let horas = (data - minutos) / 60;
    return `${horas} horas, ${minutos} min.`;
  }

  fechaAminutos(fechaI, fechaF) {
    let fecha_in = new Date(fechaI);
    let fecha_fin = new Date(fechaF);
    return (60 * (fecha_fin.getHours() - fecha_in.getHours())) + (fecha_fin.getMinutes() - fecha_in.getMinutes())
  }

  minutosAdias(data) {
    let minutos = data % 60;
    let htmp = (data - minutos) / 60;
    let horas = htmp % 8;
    let dias = (htmp - horas) / 8;
    return [dias, horas, minutos];
  }

  public orderBy(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  public convertirFecha(fecha: string) {
    return moment(fecha, 'YYYY-MM-DD').toDate();
  }

  get _base() {
    return this.base;
  }
}
