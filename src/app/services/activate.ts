import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  readonly objectifs: string[] = [];

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, titre: string) {
    this.objectifs[index] = titre;
  }
}
