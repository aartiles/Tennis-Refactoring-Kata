import { TennisGame } from './TennisGame';
import Player from './Player';

export class TennisGame3 implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getScore(): string {
    if (this.player1.isDraw(this.player2)) return this.player1.score() + '-All';
    if (this.player1.isDeuce(this.player2)) return 'Deuce';
    if (this.player1.isAdvantage() || this.player2.isAdvantage()) {
      const winingName = this.winnerName();
      const difference = this.player1.difference(this.player2);
      return (Math.abs(difference) === 1) ? 'Advantage ' + winingName : 'Win for ' + winingName;
    }
    return this.player1.score() + '-' + this.player2.score();
  }

  private winnerName(): string {
    return this.player1.isWinningTo(this.player2) ? this.player1.name() : this.player2.name();
  }

  wonPoint(playerName: string): void {
    if (this.player1.is(playerName)) {
      this.player1.wonPoint();
    }
    else {
      this.player2.wonPoint();
    }
  }
}
