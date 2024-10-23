import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent implements OnInit {

    valCheck: string[] = ['remember'];

    password!: string;

    public user ={
        username:'',
        password:'',
        nombre:'',
        apellido:'',
        email: '',
        telefono:''
    }

  

    constructor(public layoutService: LayoutService) { }

    

    ngOnInit(): void {
        
    }

    formSubmit(){
        console.log(this.user);
        if(this.user.username=='' || this.user.username == null){
            alert('El nombre de usuario es requerido'); //2:38
            return;
        }

        this.layoutService.agregarUsuario(this.user).subscribe(
            (data) => {
                console.log(data);
                Swal.fire('Usuario registrado','Usuario registrado correctamente', 'success')
            },(error)=> {
                console.log(error)
                Swal.fire('Usuario no registrado','Ha ocurrido un error al registrar el usuario', 'error')            }
        )
    }
}
