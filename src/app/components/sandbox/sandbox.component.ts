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
        --> 

        <p>My birthday is {{ birthday | date }}</p>
        <p>Your total is {{ total | currency}}</p>
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
    // --For Pipes
    birthday = new Date(1997 , 9 , 21)
    total = 500;
    
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