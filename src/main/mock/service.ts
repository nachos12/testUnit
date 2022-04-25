import { Repository } from './repository';

export class Service {
  public repo: Repository;

  public constructor(repo: Repository) {
    this.repo = repo;
  }

  public getData(): Array<any> {
    return this.repo.getData();
  }

  public addData(param: string): void {
    this.repo.addData(param);
  }

  public removeData(id: number): void {
    this.repo.removeData(id);
  }
}
