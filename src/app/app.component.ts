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

  @ViewChild(MatPaginator) paginator : MatPaginator ;

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

} 