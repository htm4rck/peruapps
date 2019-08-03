import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/service/data-app.service';
import { UserInterface } from 'src/app/models/user-interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor(private dataApi:DataAppService, private route: ActivatedRoute) { }
  private user: {};

  ngOnInit() {
    const idUser = this.route.snapshot.params['id'];
    this.getUser(idUser);
  }
  getUser(id: string){
    this.dataApi.getUserId(id).subscribe(user=>(this.user=user));
    console.log(this.user);
  }
  volver():void{
    location.href='/'
  }

}
