import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable()
export class AlertifyService {

  constructor() { }

  success(msj: string) {
    alertify.success(`<i class='fa fa-check fa-lg'></i> <b>${msj}</b>`);
  }

  warning(msj: string) {
    alertify.warning(`<i class='fa fa-exclamation-triangle fa-lg'></i><b> ${msj}</b>`);
  }

  message(msj: string) {
    alertify.message(`<i class='fa fa-check fa-lg'></i><b> ${msj}</b>`);
  }

  error(msj: string) {
    alertify.error(`<i class='fa fa-ban fa-lg'></i> <b>${msj}</b>`);
  }
}
