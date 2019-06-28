const SCORE_TO_TEXT = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

export class Player {
  private points: number = 0;
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  wonPoint() {
    this.points++;
  }
  score(): string {
    return SCORE_TO_TEXT[this.points];
  }
  name(): string {
    return this._name;
  }
  isDraw(player: Player): boolean {
    return this.points < 3 && this.points === player.points;
  }
  isDeuce(player: Player): boolean {
    return this.points >= 3 && this.points === player.points;
  }
  is(name: string): boolean {
    return name === this._name;
  }
  difference(player: Player): number {
    return this.points - player.points;
  }
  isAdvantage(): boolean {
    return this.points >= 4;
  }
}
