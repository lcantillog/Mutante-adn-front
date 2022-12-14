import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MutanteService } from './core/service/mutante.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'mutante-adn';
  displayedColumns: string[] = ['id', 'isMutante', 'fecha', 'secuencia'];
  dataSource: MatTableDataSource<any>;
  value="";
  @ViewChild(MatPaginator) paginator : MatPaginator ;
  listaAdn: any=[];

  constructor(
    private mutanteService: MutanteService,) {

  }
  
  ngOnInit(): void {
    this.getAll();
    this.getEstadistica();
  } 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEstadistica() {
    this.mutanteService.getStatisticaMutante().subscribe(resp => {
      console.log(resp);
    })
  }
  
  getAll() {
    this.mutanteService.getAllHistorico().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    })
  }

  postGuardar() {
    let data = {
      dna: this.listaAdn
    }
    this.mutanteService.postMutant(data).subscribe(resp => {
      console.log(resp);
    })
  }

  add(){
    this.listaAdn.push(this.value)
    this.value=""
  }

} 