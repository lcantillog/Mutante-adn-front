import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppSettingsService } from '../app-config/app-settings.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class MutanteService {

constructor(
  private _appSettings: AppSettingsService,
  private _utilityService: UtilityService
  ) { }

  postMutant(data: any){
    return this._utilityService.postQuery(this._appSettings.mutant.url.valida,data)
    .pipe(map((res: any) => {
      return res;
    }));
  }

  getStatisticaMutante(){
    return this._utilityService.getQuery(this._appSettings.mutant.url.estadistica)
      .pipe(map((res:any)=>{
        return res;
      }));
  }

  getAllHistorico(){
    return this._utilityService.getQuery(this._appSettings.mutant.url.all)
      .pipe(map((res:any)=>{
        return res;
      }));
  }
}
