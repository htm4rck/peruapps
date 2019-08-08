import { Component, OnInit } from '@angular/core';
import { DataAppService } from 'src/app/service/data-app.service';
import {NgForm, FormsModule} from '@angular/forms';
import {Location} from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-modaluser',
  templateUrl: './modaluser.component.html',
  styleUrls: ['./modaluser.component.css']
})
export class ModaluserComponent implements OnInit {

  constructor(private dataApi: DataAppService,
    private location: Location) { }

  ngOnInit() {
    $('#userModal').on('hidden.bs.modal', function (e) {
    document.querySelector('#modalTitle').innerHTML='NUEVO USUARIO';

      $("#id").val('');
      $("#first_name").val('');
      $("#last_name").val('');
      $("#email").val('');
      $("#avatar").val('');
    })
  }

  onSaveUser(userForm: NgForm):void{
    if(userForm.value.id==null){
      let body = new URLSearchParams();
      body.set('first_name', userForm.value.first_name);
      body.set('last_name', userForm.value.last_name);
      body.set('email', userForm.value.email);
      body.set('avatar', userForm.value.avatar);
      this.dataApi.saveUser(body).subscribe(response=>{
        $("#responseModal").modal('show');
        $("#content0").html('id: '+ response.id);
        $("#content1").html('first_name: '+ response.first_name);
        $("#content2").html('last_name: '+ response.last_name);
        $("#content3").html('correo: '+ response.email);
        $("#content4").html('avatar: '+ response.avatar);
        $("#content5").html('updateAt: '+ response.updatedAt);
        $("#userModal").modal('hide');
        console.log(response)
      });
    }else{
      console.log('actualizar');
      let body = new URLSearchParams();
      body.set('id', userForm.value.id);
      body.set('first_name', userForm.value.first_name);
      body.set('last_name', userForm.value.last_name);
      body.set('email', userForm.value.email);
      body.set('avatar', userForm.value.avatar);
      this.dataApi.updteUser(body).subscribe(response=>{
        $("#responseModal").modal('show');
        $("#content0").html('id: '+ response.id);
        $("#content1").html('first_name: '+ response.first_name);
        $("#content2").html('last_name: '+ response.last_name);
        $("#content3").html('correo: '+ response.email);
        $("#content4").html('avatar: '+ response.avatar);
        $("#content5").html('updateAt: '+ response.updatedAt);
        $("#userModal").modal('hide');
        console.log(response)
      })
    }
  }

}
