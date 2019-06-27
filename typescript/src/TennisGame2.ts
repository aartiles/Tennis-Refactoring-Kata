import { TennisGame } from './TennisGame';

const SCORE_TO_TEXT = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

export class TennisGame2 implements TennisGame {
  player1Points: number = 0;
  player2Points: number = 0;

  player1Result: string = '';
  player2Result: string = '';

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let score: string = '';
    if (this.isDraw()) {
      return this.drawScore();  
    }

    if (this.player1Points > 0 && this.player2Points === 0) {
      score = SCORE_TO_TEXT[this.player1Points] + '-' + SCORE_TO_TEXT[this.player2Points];
    }
    if (this.player2Points > 0 && this.player1Points === 0) {
      score = SCORE_TO_TEXT[this.player1Points] + '-' + SCORE_TO_TEXT[this.player2Points];
    }

    if (this.player1Points > this.player2Points && this.player1Points < 4) {
      score = SCORE_TO_TEXT[this.player1Points] + '-' + SCORE_TO_TEXT[this.player2Points];
    }
    if (this.player2Points > this.player1Points && this.player2Points < 4) {
      score = SCORE_TO_TEXT[this.player1Points] + '-' + SCORE_TO_TEXT[this.player2Points];
    }

    if (this.isAdvantage()) {
      score = this.advantageScore();  
    }
    return score;
  }

  private advantageScore() {
    if ((this.player1Points - this.player2Points) >= 2) {
      return  'Win for player1';
    }
    if ((this.player2Points - this.player1Points) >= 2) {
      return 'Win for player2';
    }
    if (this.player1Points > this.player2Points && this.player2Points >= 3) {
      return 'Advantage player1';
    }
    if (this.player2Points > this.player1Points && this.player1Points >= 3) {
      return 'Advantage player2';
    }
  }

  private isAdvantage() {
    return this.player1Points >= 4 || this.player2Points >= 4;
  }

  private drawScore() {
    if (this.player1Points < 3) {
      return `${SCORE_TO_TEXT[this.player1Points]}-All`;
    }
    else return 'Deuce';
  }

  private isDraw() {
    return this.player1Points === this.player2Points;
  }

  P1Score(): void {
    this.player1Points++;
  }

  P2Score(): void {
    this.player2Points++;
  }

  wonPoint(player: string): void {
    if (player === this.player1Name)
      this.P1Score();
    else
      this.P2Score();
  }
}
