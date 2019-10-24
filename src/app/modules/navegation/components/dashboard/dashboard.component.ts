import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
}
