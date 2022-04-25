export class Tableau {
  public tableau: Array<string> = ['a','b','c']

  public getData(): Array<string> {
    return this.tableau;
  }

  public addData(param: string): void {
    if(param.length > 2 ) {
      throw new RangeError('la valeur dépasse 2 caractères');
    }
    this.tableau.push(param);
  }

  public subData(param: string): void {
    const index = this.tableau.indexOf(param);
    this.tableau.splice(index, 1);
  }
}