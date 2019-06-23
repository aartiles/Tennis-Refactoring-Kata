import { TennisGame } from './TennisGame';


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
    if (this.player1Score === this.player2Score) {
      return this.drawScore();
    }
    else if (this.player1Score >= 4 || this.player2Score >= 4) {
      return this.advantageScore();
    }
    else {
      return this.runningScore();
    }
  }

  private runningScore() {
    let score: string = '';
    let tempScore: number = 0;

    for (let i = 1; i < 3; i++) {
      if (i === 1)
        tempScore = this.player1Score;
      else {
        score += '-';
        tempScore = this.player2Score;
      }
      score += this.scoreToText(tempScore);
    }
    return score;
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
    switch (this.player1Score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }

  private scoreToText(score: number): string {
    switch (score) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
      default:
        return '';
    }
  }
  
}

