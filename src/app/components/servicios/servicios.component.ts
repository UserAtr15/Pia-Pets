import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  public servicesList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.servicesList = res;
    })
  }

}
