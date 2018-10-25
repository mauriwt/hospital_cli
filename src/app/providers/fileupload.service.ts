import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { AlertasService } from './alertas.service';

@Injectable()
export class FileUploadService {
  public progress:number;
  public maxFileSize = 10485760;
  
  constructor (private alertasService:AlertasService) {}

  public generarFileRequest (url: string, params: any, files: File[]) {
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.withCredentials = true;

      for (let i = 0; i < files.length; i++) {
        if(files[i].size > this.maxFileSize){
          observer.error({_body: '{"mensaje": "Tamaño de los archivos excede el limite de 10MB", "accionEjecutada": "PUT FileLoader"}'});
        }
        formData.append("uploads", files[i], files[i].name);
      }

      for (let i in params) {
        formData.append(i, params[i]);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next({
              status: "OK",
              file: xhr.response
            });
            observer.complete();
          } else {
            this.alertasService.mostrarAlertaErrorObservable({_body:xhr.response});
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        //this.progress = Math.round(event.loaded / event.total * 100);
        this.progress = Math.round(event.loaded / event.total * 100);
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    }).catch(err => this.alertasService.mostrarAlertaErrorObservable(err));
  }
}