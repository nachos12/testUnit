import { Service } from '../main/mock/service';
import { Repository } from '../main/mock/repository';
import { mockGetData, mockAddData } from './mock/repoMock';

let repo: Repository;
let service: Service;

beforeEach(() => {
  const getData = mockGetData;
  const addData = mockAddData;
  repo = new Repository();
  service = new Service(repo);
});

describe('Vérif de la data présente dans service', () => {
  test('Service doit renvoyer 3 valeurs', () => {
    expect(service.getData()).toEqual(['aa', 'bb', 'cc']);
  });
});
