import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  public deutsch: boolean;
  public english: boolean;
}
