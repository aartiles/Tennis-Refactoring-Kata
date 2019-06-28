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
    if (this.player1.isDraw(this.player2)) return this.player1.score() + '-All';
    if (this.player1.isDeuce(this.player2)) return 'Deuce';
    if (this.player1.isAdvantage() || this.player2.isAdvantage()) {
      const winingName = this.winnerName();
      const difference = this.player1.difference(this.player2);
      return (Math.abs(difference) === 1) ? 'Advantage ' + winingName : 'Win for ' + winingName;
    }
    let s: string;

    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      s = this.player1.score();
      return s + '-' + this.player2.score();
    } else {
    }
  }

  private winnerName(): string {
    return this.player1.isWinningTo(this.player2) ? this.player1.name() : this.player2.name();
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
