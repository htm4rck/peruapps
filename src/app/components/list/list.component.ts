import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/service/data-app.service';
import { UserInterface } from 'src/app/models/user-interface';
import { ListInterface } from 'src/app/models/list-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private users : {};
  constructor(private dataApi:DataAppService) { }
  ngOnInit() {
    this.getList();
  }
  getList(){
    this.dataApi.getAll().subscribe((users:ListInterface)=>{
      this.users=users;
    }, error => {
      console.log(error);
    });
  }
  onPreUpdate(user:UserInterface):void{
    this.dataApi.selectedUser = Object.assign({},user)
  }
  ver(id: string):void{
    location.href='detail/'+id;
    console.log(id)
  }
}
