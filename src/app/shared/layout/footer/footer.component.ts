import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

  public version = "";
  constructor() {}

  ngOnInit() {
    this.version = $('meta[name="version"]').attr('content');
  }


}
