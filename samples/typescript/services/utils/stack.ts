
const environment = { // variable given by the underlying framework/lib
  production: false
};

export class Stack<T> {
  private data: T[] = new Array<T>();
  get isEmpty(): boolean {
    return !this.data.length;
  }
  push(toPush: T): void {
    this.data.push(toPush);
  }
  clear(): void {
    this.data = [];
  }
  pop(): T|undefined|null {
    if (!this.isEmpty) {
      return this.data.pop();
    }
    if (environment && environment.production) {
      return null;
    } else {
      return void 0;
    }
  }
}
