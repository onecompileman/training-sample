import { Component, OnInit } from '@angular/core';
import {
  MemoryTile,
  MemoryTileStatus,
} from '../../shared/models/memory-tile.model';
import { shuffleArray } from '../../shared/utils/shuffle-array.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'rk-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent implements OnInit {
  tiles: MemoryTile[] = [
    {
      icon: 'yin-yang',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'yen-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'x-ray',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wrench',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'won-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass-alt',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-bottle',
      status: MemoryTileStatus.CLOSED,
    },
  ];

  openedTile: MemoryTile = undefined;
  canOpenTile: boolean = true;
  moves: number = 0;
  time: number = 0;

  timeInterval: any;

  ngOnInit() {
    this.tiles.push(...this.tiles.map((tile) => ({ ...tile })));
    this.initGame();
  }

  restart() {
    Swal.fire({
      title: '',
      text: 'Do you want to restart?',
      icon: 'warning',
      confirmButtonText: 'Restart',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.initGame();
      }
    });
  }

  openTile(tile: MemoryTile) {
    if (tile.status === MemoryTileStatus.MATCHED || !this.canOpenTile) return;

    this.moves++;

    if (this.openedTile) {
      console.log(this.openedTile, tile);
      tile.status = MemoryTileStatus.OPEN;
      if (this.openedTile.icon === tile.icon) {
        this.openedTile.status = tile.status = MemoryTileStatus.MATCHED;
        this.openedTile = undefined;
      } else {
        this.canOpenTile = false;
        setTimeout(() => {
          this.openedTile.status = tile.status = MemoryTileStatus.CLOSED;
          this.openedTile = undefined;
          this.canOpenTile = true;
        }, 1000);
      }
    } else {
      this.openedTile = tile;
      this.openedTile.status = MemoryTileStatus.OPEN;
    }

    if (this.gameFinishedCheck()) {
      setTimeout(() => {
        Swal.fire({
          title: 'Congrats!',
          text:
            ' Finished in ' +
            this.moves +
            ' moves and ' +
            this.time +
            ' seconds',
          icon: 'success',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.initGame();
          }
        });
        this.initGame();
      }, 500);
    }
  }

  private gameFinishedCheck(): boolean {
    return this.tiles.every((tile) => tile.status === MemoryTileStatus.MATCHED);
  }

  private initGame() {
    this.canOpenTile = true;
    this.moves = 0;
    this.time = 0;
    this.tiles = this.tiles.map((tile) => {
      tile.status = MemoryTileStatus.CLOSED;
      return tile;
    });

    this.tiles = shuffleArray<MemoryTile>(this.tiles);

    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }

    this.timeInterval = setInterval(() => {
      this.time++;
    }, 1000);
  }
}
