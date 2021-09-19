class LinkedList {
  private Vertex = class Vertex {
    next: string | null = null;
    value: any;

    constructor(value: any) {
      this.value = value;
    }
  };

  head: LinkedList | null = null;

  push(input: any) {
    const temp = new this.Vertex(input);
    this.head = temp;
  }
}
