import { Repository } from '../../main/mock/repository';

const data = ['aa', 'bb', 'cc'];

// @ts-ignore
export const mockGetData = jest
  .spyOn(Repository.prototype, 'getData')
  .mockImplementation(() => {
    return data;
  });

export const mockAddData = jest
  .spyOn(Repository.prototype, 'addData')
  .mockImplementation((param: string) => {
    data.push(param);
  });
