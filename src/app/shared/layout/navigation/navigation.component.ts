import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import { SmartMenuDirective } from './smart-menu.directive';
import { config } from '../../smartadmin.config';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericoService } from '../../../providers';

@Component({

  selector: 'sa-navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {


  private menu:any[];
  public cargandoMenu:boolean;

  constructor(private router: Router,
    private aroute: ActivatedRoute, private genServer:GenericoService) {
  }

  ngOnInit() {
  }

 

  link(){
    this.router.navigate([`/asistencias/${this.genServer.makeid()}`], { relativeTo: this.aroute });
  }

}
