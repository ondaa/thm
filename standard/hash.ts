class HashTable {
  Node = class {
    key: string;

    constructor(key: string, value: string) {
      this.key = key;
      this.value = value;
    }

    get value(): string {
      return this.value;
    }

    set value(value: string) {
      this.value = value;
    }
  };

  data: Node[] = [];

  constructor(size: number) {
    this.data = new Array(size);
  }
}
