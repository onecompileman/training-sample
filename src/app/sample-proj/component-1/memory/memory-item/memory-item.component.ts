import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemoryTile, MemoryTileStatus } from 'src/app/sample-proj/shared/models/memory-tile.model';

@Component({
  selector: 'rk-memory-item',
  templateUrl: './memory-item.component.html',
  styleUrls: ['./memory-item.component.scss']
})
export class MemoryItemComponent {
  memoryTileStatus = MemoryTileStatus;

  @Input() tile!: MemoryTile;
  @Output() open = new EventEmitter();

  onOpen() {
    this.open.emit(null);
  }

}
