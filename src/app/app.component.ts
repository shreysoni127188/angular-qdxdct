
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  position: number;
  analytical_Function: string[]
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, analytical_Function: ['function1', 'function2'] },
  { position: 2, analytical_Function: ['function3'] },
  { position: 3, analytical_Function: ['function4', 'function5'] },
  { position: 4, analytical_Function: [] },
  { position: 5, analytical_Function: ['function6'] },
  { position: 6,  analytical_Function: ['function7', 'function8'] }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns: string[] = ['position',  'analytical_Function'];
  dataSource = ELEMENT_DATA;


  drop(event: CdkDragDrop<any>, row) {
    console.log(event.container.data+" row: "+row)
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);

    // }
  }
}
