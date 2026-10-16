import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activate';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  btnText: string = "Envoyer";
  objectifText: string = "";

  // ajouter un constructeur pour avoir l'ajout du routeur en paramètre:
  constructor(
    private monRouteur: Router,
    protected readonly activiteService: ActiviteService,
  ) {}

  get nbItems(): number {
    return this.activiteService.objectifs.length;
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
  }

  consulterActivite(index: number) {
    this.monRouteur.navigate(['/consultAct', index]);
  }


}
