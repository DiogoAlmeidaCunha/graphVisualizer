import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Adicionados', cols: 1, rows: 1 },
          { title: 'Por Fazer', cols: 1, rows: 1 },
          { title: 'On Going', cols: 1, rows: 1 },
          { title: 'Digitarq', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Adicionados 1', cols: 3, rows: 1 },
        { title: 'Por Fazer', cols: 1, rows: 1 },
        { title: 'On Going', cols: 2, rows: 2 },
        { title: 'Digitarq', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  todo = [
    'Adicionar Arquivo Lorvão ao Fundo RRE1233R22',
    'Melhorar Fundo RRE1233R22',
  ];

  done = [
    'Digitalizar novas unidades do documento Ovar',
    'Continuar a escrever discrição ref RE231424TTT',
    'Adicionar arquivo digitalizado',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
