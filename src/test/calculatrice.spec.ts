import { Calculatrice } from '../main/calculatrice';

let calculatrice: Calculatrice;

beforeAll(() => {
  calculatrice = new Calculatrice();
});

describe('test des différentes méthodes de la classe calculatrice', () => {
  describe('tests de la méthode add', () => {
    test("l'addition de a et b doit renvoyer a + b", () => {
      expect(calculatrice.add(2, 4)).toEqual(6);
      expect(calculatrice.add(4, 12)).toEqual(16);
      expect(calculatrice.add(-2, 4)).toEqual(2);
    });
  });

  describe('test de la méthode divide', () => {
    it('la division de 4 par 2 renvoie 2', () => {
      expect(calculatrice.divide(4, 2)).toEqual(2);
    });

    it('la division par 0 lève une exception de type Error', () => {
      expect(() => {
        calculatrice.divide(5, 0);
      }).toThrow(Error);
    });
  });
});
