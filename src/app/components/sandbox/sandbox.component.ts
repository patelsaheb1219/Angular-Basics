import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Hello World</h1>
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
    `
})

export class SandboxComponent{
    people:number[] = [1 ,2, 3, 4];
    people2:string[] = ['Kishan' , 'Freddy' , 'Dhritesh' , 'Ravi'];

    people3 = [
        {
            firstName:'Kishan',
            lastName:'Patel'
        },
        {
            firstName:'Dhrvil',
            lastName:'Patel'
        },
        {
            firstName:'Dhritesh',
            lastName:'Patel'
        },
        {
            firstName:'Ravi',
            lastName:'Patel'
        }
    ];
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

    // constructor(){
    //      console.log('Constructor is running...');
    //      this.age = 22;
    //      this.hasBirthday();
    //     this.customer = {
    //         id: 1,
    //         name:'Kishan',
    //         age:21
    //     }

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