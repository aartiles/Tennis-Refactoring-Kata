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
    let score: string = '';
    let tempScore: number = 0;
    if (this.player1Score === this.player2Score) {
      return this.drawScore(this.player1Score);
    }
    else if (this.player1Score >= 4 || this.player2Score >= 4) {
      const minusResult: number = this.player1Score - this.player2Score;
      if (minusResult === 1) score = `Advantage ${this.player1Name}`;
      else if (minusResult === -1) score = `Advantage ${this.player2Name}`;
      else if (minusResult >= 2) score = `Win for ${this.player1Name}`;
      else score = `Win for ${this.player2Name}`;
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.player1Score;
        else { score += '-'; tempScore = this.player2Score; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }

  private drawScore(score: number): string {
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
}
