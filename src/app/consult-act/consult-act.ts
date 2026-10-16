import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActiviteService } from '../services/activate';
@Component({
  imports: [FormsModule],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  indexActivite = -1;
  activite?: string;
  numeroActivite?: number;
  enEdition = false;
  titreModifie = '';

  constructor(
    private actRoute: ActivatedRoute,
    private activiteService: ActiviteService,
    private router: Router,
  ) {
    const index = Number(this.actRoute.snapshot.paramMap.get('idAct'));

    if (Number.isInteger(index) && index >= 0) {
      this.indexActivite = index;
      this.activite = this.activiteService.objectifs[index];
      this.numeroActivite = index + 1;
    }
  }

  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.router.navigate(['/']);
  }

  modifier() {
    this.titreModifie = this.activite ?? '';
    this.enEdition = true;
  }

  sauvegarder() {
    this.activiteService.updateItem(this.indexActivite, this.titreModifie);
    this.activite = this.titreModifie;
    this.enEdition = false;
  }

  retour() {
    this.router.navigate(['/']);
  }

}
