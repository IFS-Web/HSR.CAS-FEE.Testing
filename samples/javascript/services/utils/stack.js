export class Stack {
  constructor() {
    this.data = [ ];
  }
  get isEmpty() {
    return !this.data.length;
  }
  push(toPush) {
    this.data.push(toPush);
  }
  clear() {
    this.data = [];
  }
  pop() {
    if (!this.isEmpty) {
      return this.data.pop();
    }
    if (typeof environment !== 'undefined' && environment.production) {
      return null;
    } else {
      return void 0;
    }
  }
}
