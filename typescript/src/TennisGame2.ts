import { TennisGame } from './TennisGame';


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
    if (this.player1Points === this.player2Points && this.player1Points < 4) {
      if (this.player1Points === 0)
        score = 'Love';
      if (this.player1Points === 1)
        score = 'Fifteen';
      if (this.player1Points === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.player1Points === this.player2Points && this.player1Points >= 3)
      score = 'Deuce';

    if (this.player1Points > 0 && this.player2Points === 0) {
      if (this.player1Points === 1)
        this.player1Result = 'Fifteen';
      if (this.player1Points === 2)
        this.player1Result = 'Thirty';
      if (this.player1Points === 3)
        this.player1Result = 'Forty';

      this.player2Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.player2Points > 0 && this.player1Points === 0) {
      if (this.player2Points === 1)
        this.player2Result = 'Fifteen';
      if (this.player2Points === 2)
        this.player2Result = 'Thirty';
      if (this.player2Points === 3)
        this.player2Result = 'Forty';

      this.player1Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.player1Points > this.player2Points && this.player1Points < 4) {
      if (this.player1Points === 2)
        this.player1Result = 'Thirty';
      if (this.player1Points === 3)
        this.player1Result = 'Forty';
      if (this.player2Points === 1)
        this.player2Result = 'Fifteen';
      if (this.player2Points === 2)
        this.player2Result = 'Thirty';
      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.player2Points > this.player1Points && this.player2Points < 4) {
      if (this.player2Points === 2)
        this.player2Result = 'Thirty';
      if (this.player2Points === 3)
        this.player2Result = 'Forty';
      if (this.player1Points === 1)
        this.player1Result = 'Fifteen';
      if (this.player1Points === 2)
        this.player1Result = 'Thirty';
      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.player1Points > this.player2Points && this.player2Points >= 3) {
      score = 'Advantage player1';
    }

    if (this.player2Points > this.player1Points && this.player1Points >= 3) {
      score = 'Advantage player2';
    }

    if (this.player1Points >= 4 && this.player2Points >= 0 && (this.player1Points - this.player2Points) >= 2) {
      score = 'Win for player1';
    }
    if (this.player2Points >= 4 && this.player1Points >= 0 && (this.player2Points - this.player1Points) >= 2) {
      score = 'Win for player2';
    }
    return score;
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
