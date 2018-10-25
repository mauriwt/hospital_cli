import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { config } from '../shared/smartadmin.config';

declare var moment: any;
declare var $:any;

@Injectable()
export class AlertasService {

  private static alertTime = config.alertTimeOut; 

  public  mensaje = "<b>El registro se guardó correctamente.</b>";
  public  msjUpdate = "<b>El registro se actualizó correctamente.</b>";

  public msjAprobacion = "La solicitud cumple con el acuerdo establecido en el Art. xxx, del reglamento interno de la EMPRESA PÚBLICA YACHAY  por lo cual es APROBADO.";

  constructor() { }

  public mostrarAlertaErrorObservable(err:any)
  {
    console.log("Error del sistema en (HTTP)", err);
    let content;
    if(err._body && typeof(err._body) == 'string'){
      let errores = JSON.parse(err._body);
      if(errores.length)
        for(let index in errores)
        {
          let e = errores[index];
          content = (e.mensaje || 'Errores desconocido.') + "<br>Ejecutando: " + (e.accionEjecutada || 'desconocida');
          this.mostrarAlertaError("Mensaje del servidor.", content, err);
        }
      else if(err.status == 401 || err.status == 403){
        content = `No tiene permisos para ejecutar el servicio <b>${err.url}</b>  `;
        this.mostrarAlertaError("Error de autenticación.", content, "");
      }
      else{
        content = ( errores.mensaje || 'Error desconocido.') 
        + "<br>Ejecutando: " + (errores.accionEjecutada || 'desconocida');
        this.mostrarAlertaError("Mensaje del servidor.", content, err.url);
      }
    }else
    {
       this.mostrarAlertaError("Servicio no encontrado", "No hay ninguna respuesta del servidor." ,"Verifique si los servicios están disponibles.");
    }
    return Observable.throw(err || 'Error desconocido la respuesta del servidor.')
  }

  public mostrarAlertaError(titulo:string, mensaje:string, err:any)
  {
    $.smallBox({
      title: titulo,
      content: `<b>${mensaje}</b> <br/> ${err}`,
      color: "#DF3A01",
      icon: "fa fa-exclamation-triangle bounce animated",
      timeout: AlertasService.alertTime
    });
  }

  public mostrarAlertaMessage(titulo:string, mensaje:string, err:any)
  {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#2E9AFE",
      icon: "fa fa-bell-o bounce animated",
      timeout: AlertasService.alertTime
    });
  }

  public msjBiometrico(titulo:string, mensaje:string)
  {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#333",
      timeout: 1000*20
    });
  }

  public mostrarAlertaInfo(titulo:string, mensaje:string)
  {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#3276b1",
      icon: "fa fa-bell bounce animated",
      timeout: AlertasService.alertTime
    });
  }
  public mostrarAlertaInfoGeneric()
  {
    $.smallBox({
      title: "Mensaje del sistema.",
      content: "Acción completada correctamente.",
      color: "#3276b1",
      icon: "fa fa-bell-o bounce animated",
      timeout: AlertasService.alertTime
    });
  }

  public clear(p1?: string, p2?: string, p3?: string) {
    $(p1).val(null).select2();
    $(p1).val(null).trigger("change");
  }

  public castFecha(fecha: Date) {
    let cast = moment(fecha).format("DD/MM/YYYY").toString().split("-");
    return cast[0]
  }

  public castHora(hora:string){
    if(hora) 
      return moment(hora, "HH:mm:ss").format("HH:mm:ss")
    return null;
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

  public convertirFecha(fecha: string, hora?: string) {
    if (fecha && hora)
      return moment(`${fecha} ${hora}`, 'DD/MM/YYYY HH:mm').toDate();
    else if (fecha)
      return moment(fecha, 'DD/MM/YYYY').toDate();
    return null;
  }

  getCatalogoValidos(catalogo: any) {
    let validos = [];
    for (let d of catalogo) {
      if (d.cadEstadoDet === 'V')
        validos.push(d)
    }
    return validos;
  }
}
