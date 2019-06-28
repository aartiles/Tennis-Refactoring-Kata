import { TennisGame } from './TennisGame';
import { Player } from './Player';

export class TennisGame2 implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getScore(): string {
    if (this.player1.isDraw(this.player2)) return this.drawScore();  
    if (this.player1.isDeuce(this.player2)) return this.deuceScore();  
    if (this.isAdvantage()) return this.advantageScore();  
    return this.runningScore();
  }

  wonPoint(playerName: string): void {
    if (this.player1.is(playerName))
      this.player1.wonPoint();
    else
    this.player2.wonPoint();
  }

  private drawScore() {
    return `${this.player1.score()}-All`;
  }

  private deuceScore() {
    return 'Deuce';
  }

  private isAdvantage() {    
    return this.player1.isAdvantage() || this.player2.isAdvantage();
  }

  private advantageScore() {
    const difference = this.player1.difference(this.player2);
    if (difference >= 2) return  `Win for ${this.player1.name()}`;
    if (difference <= -2) return `Win for ${this.player2.name()}`;
    if (difference === 1) return `Advantage ${this.player1.name()}`;
    if (difference === -1) return `Advantage ${this.player2.name()}`;
  }

  private runningScore() {
    return `${this.player1.score()}-${this.player2.score()}`;
  }

}
