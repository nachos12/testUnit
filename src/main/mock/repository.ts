export class Repository {
  public table = ['a'];

  fetchData(): void {
    fetch('https://google.com')
      .then(value => {
        JSON.stringify(value);
      })
      .then(value => {
        // @ts-ignore
        this.table = value;
      });
  }
  
  getData(): Array<any> {
    return this.table;
  }

  addData(param: string) {
    // @ts-ignore
    fetch('https://google.com', param);
  }

  removeData(id: number) {
    fetch('https://google.com/' + id);
  }
}
