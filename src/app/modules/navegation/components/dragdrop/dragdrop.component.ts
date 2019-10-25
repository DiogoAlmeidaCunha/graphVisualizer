import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css'],
})

export class DragdropComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourceDiogo = ELEMENT_DATA;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  handleClick(message){
    console.log(message);

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Fundo Lorvao ', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Fundo Ovar Composto', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Fundo Aveiro', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Fundo Sintra Cidade', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Fundo Alcatra Composto', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Fundo Boavista', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Serie Sao Pedro ', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Unidade Composta Gondomar', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fundo Gondomar', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Fundo Rio Tinto', weight: 20.1797, symbol: 'Ne'},
    ];
    this.dataSourceDiogo = ELEMENT_DATA;
    
  }

}
