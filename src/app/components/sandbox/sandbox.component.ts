import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';
@Component({
    selector:'sandbox',
    template:`
        <!--
        <h3>Hello 
           <span *ngIf="showName">{{ name }}</span>
           <span *ngIf="!showName">World</span>

           <span *ngIf="showName;  else noName">{{ name }}</span>
           <ng-template #noName>World</ng-template>

           <p>Hello {{ showName ? name : 'World'}}</p>
           
        </h3>
        -->
        
        
        <!-- for ng For
        <ul>
            <li *ngFor="let person of people">
                {{ person }}
            </li>
        </ul>
        <ul>
            <li *ngFor="let neew of people2; let i = index">
               {{i + 1}} {{ neew }}
            </li>
        </ul>
        <ol>
            <li *ngFor="let person of people3">
                {{ person.firstName }} {{ person.lastName }}
            </li>
        </ol>
           
        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="1">Hello World</div>
            <div *ngSwitchCase="2">Hello Kishan</div>
            <div *ngSwitchCase="3">Hello Patel</div>
            <div *ngSwitchCase="4">Hello Freddy</div>
            <div *ngSwitchDefault>Default</div>
        </div>
        
        <!-- 3 ways to binding the properties -->
        <!--
        <div><img src="{{ imageUrl }}"></div>
        <div><img [src]="imageUrl"></div>
        <div><img bind-src="imageUrl"></div>
        
        <hr>

        <h2>Create Post</h2>
        <p [hidden]="isUnChanged">Post has been changed, please Save</p>
        <button [disabled]="isUnChanged">Save</button>
        -->

        <hr>
        <!--
        <h4 [class.special]="isSpecial">This is special class.</h4>  
        <h4 [ngClass]="currentClasses">This div intially savable.</h4>
        

        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">Font size depend on isSpecial. </div>
        <div [ngStyle]="currentStyles">This is intially savable and special</div>
         

        <p>My birthday is {{ birthday | date }}</p>
        <p>Your total is {{ total | currency}}</p>
        -->
        <h2>Hello World</h2>

        <!--
        <button (click)="fireEvent('Kishan Patel')">Cl ick Me</button>
        <br>
        <button (mouseover)="fireEvent($event)">Mouseover Event</button>
        <br>
        <button (mousedown)="fireEvent($event)">MouseDown Event</button>
        <br>
        <button (mouseup)="fireEvent($event)">MouseUp Event</button>
        <br>
        <button (dblclick)="fireEvent($event)">DoubleClick Event</button>
        <br>
        <button (drag)="fireEvent($event)">Drag Event</button>
        <br>
        <button (dragover)="fireEvent($event)">Dragover Event</button>  
        
        <button (click)="changeValue()">Change Value</button>
        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div> 
        
        -->

        <!-- Keyboard Events
        <div>
            <input type="text"  (keyup)="changeEvent($event)" placeholder="Keyup">
        </div>
        
        <div>
            <input type="text"  (keydown)="changeEvent($event)" placeholder="Keydown">
        </div>
        <div>
            <input type="text"  (focus)="changeEvent($event)" placeholder="focus">
        </div>
        <div>
            <input type="text"  (blur)="changeEvent($event)" placeholder="blur">
        </div>
        <div>
            <input type="text"  (cut)="changeEvent($event)" placeholder="cut">
        </div>
        <div>
            <input type="text"  (copy)="changeEvent($event)" placeholder="copy">
        </div>
        <div>
            <input type="text"  (paste)="changeEvent($event)" placeholder="paste">
        </div>

        -->

        <!-- ngModel
        <div  class="container">
            <form class="form-group">
                <div>
                    <label>Name :</label>
                    <input type="text" name="name" [(ngModel)]="name" class="form-control"/>
                </div>
                <div>
                    <label>Age :</label>
                    <input type="number" [(ngModel)]="age" name="age" class="form-control"/>
                </div>
                <input type="submit" value="Submit" class="btn btn-success" />
            </form>

            <h4>Name : {{ name }}</h4>
            <h4>Age : {{ age }}</h4>
        </div>
        -->

        <!-- Form submission
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" [(ngModel)]="name" class="form-control" />
                </div>
                <input type="submit" value="Submit" class="btn btn-success"  />
            </form>
        </div>

        <hr>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>
        -->

        <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)" >
            <div class="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    class="form-control"  
                    [(ngModel)] = "user.name" 
                    name = "name" 
                    #userName="ngModel"
                    minlength="2" 
                    required  
                />
                <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">Name is required</div>
                <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">Name has minimum 2 character required</div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input 
                    type="text" 
                    class="form-control"  
                    [(ngModel)] = "user.email" 
                    name = "email"
                    #userEmail="ngModel" 
                    required  />
                    <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger">Email  is required</div>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input 
                    type="text" 
                    class="form-control"  
                    [(ngModel)] = "user.phone"
                    name = "phone"
                    #userPhone ="ngModel"
                    minlength="10"
                    required   
                />
                <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">Enter valid Phone Number</div>
            </div>
            <input type="submit" value="Submit" class="btn btn-success" />
        </form>
    
    `,
    /*
    styles:[
        `
            .special{
                color:green;
            }

            .saveable{
                text-transform:uppercase;
            }
        `
    ]
    */
})

export class SandboxComponent{
    // -- Form validation
    user = {
        name: '',
        email: '',
        phone:''
    };

    onSubmit({value , valid}){
        if(valid){
            console.log(value);
        }else{
            console.log('form is Invalid')
        }
    }
    
    // -- Form Submission
    // name:string = '';
    // users:string[] = ['Kishan' , 'Rahul' , 'Dhruvil']
    
    // onSubmit(){
    //     this.users.push(this.name);
    // }
    
    // -- ngModels
    // name:string =  '';
    // age:number = 0;
    
    
    // -- Keyboard events
    // changeEvent(e){
    //     console.log(e.type);
    // }
    
    
    // -- Change properties with Events
    // text:string = 'Hello World';
    // value:boolean = true;

    // changeValue(){
    //     this.value = !this.value;
        
    // }
    
    
    // -- Mouse Events
    // fireEvent(greeting){
    //     console.log(greeting);
    // }
    

    // --For Pipes
    // birthday = new Date(1997 , 9 , 21)
    // total = 500;
    
    // -- for ngStyle
    // isSpecial:boolean = true;
    // canSave:boolean = true;
    // currentStyles = {};

    // constructor(){
    //     this.setCurrentStyles();
    // }

    // setCurrentStyles(){
    //     this.currentStyles = {
    //         'font-style': this.canSave ? 'italic' : 'normal',
    //         'font-size': this.isSpecial ? 'x-large' : '12px',
    //     }
    // }

    
    //  --For ngClass
    // isSpecial:boolean = true;
    // canSave:boolean = true;
    // currentClasses = {};

    // constructor(){
    //     this.setCurrentClasses();
    // }

    // setCurrentClasses(){
    //     this.currentClasses = {
    //         saveable:this.canSave,
    //         special:this.isSpecial 
    //     }
    // }
    
    
    // --For binding the properties
    // imageUrl:string = 'http://lorempixel.com/400/200';
    // isUnChanged:boolean = false;
    
    // --For Conditionals ngIf and ngSwitch
    // name:string = 'Kishan Patel';
    // showName:boolean = false;
    // greeting:number = 888;
    
    // --For ngFor Loop
    // people:number[] = [1 ,2, 3, 4];
    // people2:string[] = ['Kishan' , 'Freddy' , 'Dhritesh' , 'Ravi'];

    // people3 = [
    //     {
    //         firstName:'Kishan',
    //         lastName:'Patel'
    //     },
    //     {
    //         firstName:'Dhrvil',
    //         lastName:'Patel'
    //     },
    //     {
    //         firstName:'Dhritesh',
    //         lastName:'Patel'
    //     },
    //     {
    //         firstName:'Ravi',
    //         lastName:'Patel'
    //     }
    // ];

    // --For Data binding and interpolation & Adding types and properties
    //  name:string = 'Kishan';
    //  age:number = 21;
    //  person = {firstName:'Kishan' , lastName:'Patel'}; 
    //  city:any = 'Khambhat';
    //  myNumberArray:number[] = [1 ,2, 3];
    //  myStringArray:string[] = ['Hello' , 'World'];
    //  myAnyArray:any[] = ['Hello' , 1, 3];
    //  u : undefined = undefined;
    //  k : null = null;
    // customer:Customer;
    // customers: Customer[];

    // --It's Constructor for use when object is call
    // constructor(){
    //      console.log('Constructor is running...');
    //      this.age = 22;
    //      this.hasBirthday();
    //     this.customer = {
    //         id: 1,
    //         name:'Kishan',
    //         age:21
    //     }

    // --For Object interface
    //     this.customers = [
    //         {
    //             id: 1,
    //             name:'Kishan',
    //             age:21
    //         },
    //         {
    //             id: 2,
    //             name:'Rahul',
    //             age:21
    //         },
    //         {
    //             id: 3,
    //             name:'Kishan',
    //             age:21
    //         }
    //     ]
    // }

    // hasBirthday(){
    //     this.age += 1;
    // }

    // showAge(){
    //     return this.age;
    // }

}