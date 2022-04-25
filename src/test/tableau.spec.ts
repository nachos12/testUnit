import { Tableau } from '../main/tableau';

let tableau: Tableau;

beforeEach(() => {
  tableau = new Tableau();
});

describe('vérification de la data présente dans le tableau', () => {
  test('le tableau doit renvoyer 3 valeurs', () => {
    expect(tableau.getData()).toHaveLength(3);
  });
});

describe('check de la méthode addData', () => {
  it('ajout de D, le tableau comprend maintenant 4 valeurs', () => {
    tableau.addData('D');
    expect(tableau.tableau).toHaveLength(4);
    expect(tableau.tableau).not.toContain('d');
    expect(tableau.tableau).toContain('D');
  });
  it("levée d'exception quand le param vaut plus de 2 caractères", () => {
    expect(() => {
      tableau.addData('789');
    }).toThrow('la valeur dépasse 2 caractères');
  });
});

describe('check de la méthode subData', () => {
  it('on supprime la valeur b', () => {
    expect(tableau.tableau).toHaveLength(3);
    tableau.subData('b');
    expect(tableau.tableau).toHaveLength(2);
    expect(tableau.tableau).not.toContain('b');
  });
});
