import { Injectable } from '@angular/core';
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor() { }

  /**
   * mutante
   */
  public mutant = {
      url:{
        valida: EndPoints.urlMutante('/mutant'),
        all: EndPoints.urlMutante('/mutant/all'),
        estadistica: EndPoints.urlMutante('/stats/')
      }
     
  }

}
