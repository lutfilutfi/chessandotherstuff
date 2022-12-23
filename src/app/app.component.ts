import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { truncateSync } from 'fs';
import { Observable} from 'rxjs';
import {fromEvent} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('Luman',{static:true}) element:ElementRef;
  title = 'Family';
  inputSearch:Observable<string>;
  activePages:string[]=['Polar Lutfi','Cool Cali','Devil Duke','Polar mama bear','chess']
  searchTerm:string='';

  constructor(private router:Router){
    console.log('component is created')
  }

  ngAfterViewInit(){
    this.inputSearch=fromEvent(this.element.nativeElement,'input')
    this.inputSearch.subscribe(x=>console.log('hello+',this.searchTerm));
  }
  change(x:string):void{
    console.log(`${x} learns to code`);
    switch(x){
      case 'Polar Lutfi':this.router.navigate(['lutfi']);
      break;
      case 'Cool Cali':this.router.navigate(['caliph']);
      break;
      case 'Devil Duke':this.router.navigate(['dukman']);
      break;
      case 'Polar mama bear':this.router.navigate(['haseena']);
      break;
      case 'chess':this.router.navigate(['chess']);
      break;
      default:console.log(`${x} learns to code`);
    }
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
