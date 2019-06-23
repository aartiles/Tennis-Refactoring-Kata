import { TennisGame } from './TennisGame';

const SCORE_TO_TEXT = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }

  getScore(): string {
    if (this.isDraw()) {
      return this.drawScore();
    }
    else if (this.isAdvantage()) {
      return this.advantageScore();
    }
    else {
      return this.runningScore();
    }
  }

  private isAdvantage(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  private isDraw(): boolean {
    return this.player1Score === this.player2Score;
  }

  private runningScore() {
    return `${this.scoreToText(this.player1Score)}-${this.scoreToText(this.player2Score)}`;
  }

  private scoreToText(score: number): string {
    return SCORE_TO_TEXT[score];
  }

  private advantageScore() {
    const difference = this.player1Score - this.player2Score;
    if (difference === 1)
      return `Advantage ${this.player1Name}`;
    else if (difference === -1)
      return `Advantage ${this.player2Name}`;
    else if (difference >= 2)
      return `Win for ${this.player1Name}`;
    else
      return `Win for ${this.player2Name}`;
  }

  private drawScore(): string {
    if (this.player1Score < 3) {
      return `${this.scoreToText(this.player1Score)}-All`;
    }
    else return 'Deuce';
  }  
}

