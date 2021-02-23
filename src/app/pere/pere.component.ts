import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
moyenne = 0 ;
somme = 0 ;
nbr = 0 ;
enfants = ['wick','hoffman','abruzzi'];
  constructor() { }

  ngOnInit(): void {}
  computeAvg(note:number):void{
      this.somme += note;
      this.nbr++;
      this.moyenne = this.somme / this.nbr;
  }

}
