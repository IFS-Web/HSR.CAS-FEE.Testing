import {environment} from '../../../environments/environment';
export class Stack<T> {
  private _data: T[] = new Array<T>();
  get isEmpty(): boolean {
    return !this._data.length;
  }
  push(toPush: T): void {
    this._data.push(toPush);
  }
  clear(): void {
    this._data = [];
  }
  pop(): T {
    if (!this.isEmpty) {
      return this._data.pop();
    }
    if (environment.production) {
      return null;
    } else {
      return void 0;
    }
  }
}
