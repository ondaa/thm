interface Vertex {
  next: Vertex | null;
  data: string | number;
}

class LinkedList {
  private Vertex = class Vertex {
    next: Vertex | null = null;
    data: string | number;

    constructor(data: string | number) {
      this.data = data;
    }
  };

  head: Vertex | null = null;
  private length: number = 0;

  add(input: string | number) {
    const temp = new this.Vertex(input);

    if (this.head) {
      temp.next = this.head;
    }

    this.head = temp;
    this.length++;
  }

  remove(data: string | number) {
    this.length--;
  }

  size() {
    return this.length;
  }

  find(data: string | number) {
    let current = this.head;
    let index = -1;

    while (current) {
      index++;

      if (current.data === data) {
        return index;
      }

      current = current.next;
    }

    return -1;
  }
}

const members = new LinkedList();
