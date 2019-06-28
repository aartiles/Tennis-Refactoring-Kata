import { TennisGame } from './TennisGame';

const SCORE_TO_TEXT = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

class Player {
  private points: number = 0;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  wonPoint() {
    this.points++;
  }

  score(): string {
    return SCORE_TO_TEXT[this.points];
  }

  isDraw(player: Player): boolean {
    return this.points < 3 && this.points === player.points;
  }

  isDeuce(player: Player): boolean {
    return this.points >= 3 && this.points === player.points;
  }

  is(name: string): boolean {
    return name === this.name;
  }

  difference(player: Player): number {
    return this.points - player.points;
  }

  isAdvantage(): boolean {
    return this.points >= 4;
  }
}

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

  private runningScore() {
    return `${this.player1.score()}-${this.player2.score()}`;
  }

  private advantageScore() {
    const difference = this.player1.difference(this.player2);
    if (difference >= 2) return  'Win for player1';
    if (difference <= -2) return 'Win for player2';
    if (difference === 1) return 'Advantage player1';
    if (difference === -1) return 'Advantage player2';
  }

  private isAdvantage() {
    return this.player1.isAdvantage() || this.player2.isAdvantage();
  }

  private drawScore() {
    return `${this.player1.score()}-All`;
  }

  private deuceScore() {
    return 'Deuce';
  }

  private isDraw() {
    return this.player1.isDraw(this.player2);
  }

  wonPoint(playerName: string): void {
    if (this.player1.is(playerName))
      this.player1.wonPoint();
    else
    this.player2.wonPoint();
  }
}
