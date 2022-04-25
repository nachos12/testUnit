export class Calculatrice {
  public add(a: number, b: number): number {
    return a + b;
  }

  // division par 0 renvoie une erreur
  public divide(a: number, b: number): number {
    if (b === 0) {
      throw Error('division par 0');
    }
    return a / b;
  }
}
