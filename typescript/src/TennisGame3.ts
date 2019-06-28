import { TennisGame } from './TennisGame';
import Player from './Player';

export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  private p1N: string;
  private p2N: string;

  private player1: Player;
  private player2: Player;

  constructor(p1N: string, p2N: string) {
    this.p1N = p1N;
    this.p2N = p2N;
    this.player1 = new Player(p1N);
    this.player2 = new Player(p2N);
  }

  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      s = this.player1.score();
      return (this.player1.isDraw(this.player2)) ? s + '-All' : s + '-' + this.player2.score();
    } else {
      if (this.p1 === this.p2)
        return 'Deuce';
      s = this.p1 > this.p2 ? this.p1N : this.p2N;
      return (((this.p1 - this.p2) * (this.p1 - this.p2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (this.player1.is(playerName)) {
      this.player1.wonPoint();
      this.p1 += 1;
    }
    else {
      this.player2.wonPoint();
      this.p2 += 1;
    }
  }
}
