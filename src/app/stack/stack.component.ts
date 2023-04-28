import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-stack',

  template: `
    <div class="mx-auto container" cdkDropList (cdkDropListDropped)="onDrop($event)">
      <div class="stack-item" *ngFor="let item of stackItems; let i = index" cdkDrag>
        {{ item }}
      </div>
    </div>
  `,
  styles: [`
    .stack {
      display: flex;
      flex-direction: column;
    }

    .stack-item {
      padding: 10px;
      margin-bottom: 10px;
      background-color: #eee;
    }
  `]
})
export class StackComponent {

  stackItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stackItems, event.previousIndex, event.currentIndex);
  }
}
