import { Component, OnInit } from '@angular/core';
import { MutanteService } from './core/service/mutante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mutante-adn';

  constructor(
    private mutanteService: MutanteService,) {

  }

  ngOnInit(): void {

    this.getEstadistica();
  } 

  getEstadistica() {
    this.mutanteService.getStatisticaMutante().subscribe(resp => {
      console.log(resp);
    })
  }
  
  getAll() {
    this.mutanteService.getAllHistorico().subscribe(resp => {
      console.log(resp);
    })
  }

}
