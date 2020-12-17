import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  nombre1 = 'Bernardo Paredes De Santos';
  nombre2 = 'Maximiliano Malo Medina';
  constructor() { }

  ngOnInit(): void {
  }

}
