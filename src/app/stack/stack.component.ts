import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-stack',

  template: `
    <div class="flex flex-col mx-auto container mt-10" cdkDropList (cdkDropListDropped)="onDrop($event)">
      <div class="flex items-center bg-slate-200 stack-item" *ngFor="let item of stackItems; let i = index" cdkDrag>
        {{ item }}
        <button (click)="addItem(i)">Add Item</button>
      </div>
    </div>
  `,
  styles: [`
    .stack-item {
      background-color: #eee;
    }
    .stack-item-content {
      flex: 1;
    }
    .add-item-button {
      margin-left: 10px;
    }
  `]
})
export class StackComponent {

  stackItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stackItems, event.previousIndex, event.currentIndex);
  }

  addItem(index: number) {
    this.stackItems.splice(index + 1, 0, 'New Item');
  }
}
