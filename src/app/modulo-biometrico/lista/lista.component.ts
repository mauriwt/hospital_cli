import { Component, OnInit } from '@angular/core';
import { config } from 'app/shared/smartadmin.config';
import { GenericoService, CRUDService, AlertasService, AlertifyService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Catalogo } from 'app/models';
declare var $;
@Component({
  selector: 'bio-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  private base = config.APIRest.url.local;
  public biometricos: Catalogo[];
  public cargando: boolean;
  public conectar: boolean;
  public init: boolean;
  public codigos = [];
  public rutas: any;
  public horas: any;
  public backup: any;
  public ip: string;
  constructor(private crud: CRUDService, private genServer: GenericoService, private router: Router, private aroute: ActivatedRoute, private msj: AlertasService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.biometricos = new Array<Catalogo>();
    this.getBiometricos();
  }

  getBiometricos() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.catalogo.base}`).subscribe(response => {
      this.biometricos = response;
      this.cargando = false;
      this.alertify.success("<b> Carga completa </b>");
    }, error =>{
      this.cargando = false;
    });
  }

  getFila(id) {
    this.router.navigate(['/biometrico/save', id], { relativeTo: this.aroute });
  }

  cambiarEstado(id, estado) {
    this.cargando = true;
    this.crud.patch(`${this.base}${config.APIRest.biometrico.base}/codigo/${id}/estado/${!estado}`).subscribe(response => {
      this.getBiometricos();
    });
  }

  confirmSave(id, estado) {
    $.SmartMessageBox({
      title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Confirmar <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
      content: "¿ Está seguro de cambiar el estado ?",
      buttons: '[CANCELAR][ACEPTAR]'
    }, (ButtonPressed) => {
      if (ButtonPressed == "ACEPTAR") {
        this.cambiarEstado(id, estado);
      }
    });
  }

  go() {
    this.router.navigate(['/biometrico/bio/save'], { relativeTo: this.aroute });
  }

  seleccionar(e) {
    if (e.currentTarget.checked) {
      this.genServer.checkAll();
      this.codigos = this.genServer.getBioIds(this.biometricos);
    } else {
      this.genServer.noCheckAll();
      this.codigos = [];
    }
  }

  isChecked() {
    return $('input[name="check"]:checked').length > 0;
  }

  ////////////////////////////////////////////////////////
  /// INICIAR PRIMERA CARGA EN EL BIOMETRICO (INICIO) ////
  ////////////////////////////////////////////////////////

  public inicializar(api_url, msj) {
    this.init = true;
    $(window).on('beforeunload', function () {
      return false;
    });
    this.crud.obtener(api_url).subscribe(response => {
      this.init = false;
      $(window).off("beforeunload");
      this.confirmarOk(msj);
    }, err => {
      this.init = false;
      this.msj.mostrarAlertaError("<b>Error de sincronización</b>", "", "")
      $(window).off("beforeunload");
    });

  }

  public confirmarSync() {
    $.SmartMessageBox({
      title: "¿ Seguro desea continuar ?",
      content: "El procesamiento de los datos puede tardar varios minutos.",
      buttons: "[CANCELAR][ACEPTAR]"
    }, (ButtonPress, Value) => {
      if (ButtonPress === "ACEPTAR") {
        this.inicializar(`${this.genServer._base}${config.APIRest.biometrico.init}/${this.ip}`,"La creación de datos ha finalizado correctamente.");
      }
    });
  }

  /////////////////////////////////////////////////////
  /// INICIAR PRIMERA CARGA EN EL BIOMETRICO (FIN) ////
  /////////////////////////////////////////////////////

  public syncronizar() {
    $.SmartMessageBox({
      title: "¿ Seguro deseas continuar ?",
      content: "La sincronización de datos puede tardar varios minutos.",
      buttons: "[CANCELAR][ACEPTAR]"
    }, (ButtonPress, Value) => {
      if (ButtonPress === "ACEPTAR") {
        this.inicializar(`${this.genServer._base}${config.APIRest.sincronizar.base}`,"La sincronización de datos ha finalizado correctamente.");
      }
    });
  }

  public confirmarOk(msg) {
    $.SmartMessageBox({
      title: "Información",
      content: msg,
      buttons: "[ACEPTAR]"
    }, (ButtonPress, Value) => {
      if (ButtonPress === "ACEPTAR") {
        console.log("listo");
      }
    });
  }
}
