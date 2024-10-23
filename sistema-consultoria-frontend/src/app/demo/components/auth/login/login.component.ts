import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{


    valCheck: string[] = ['remember'];


    loginData = {
        "username":"",
        "password": ""
    }

    constructor(public layoutService: LayoutService) { }
    ngOnInit(): void {
    }

    formSubmit()
    {
        this.layoutService.generateToken(this.loginData).subscribe(
            (data:any)=>{
                console.log(data);
            }, (error)=>{
                console.log(error);
            }
        )
    }

    
}
