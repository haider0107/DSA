class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(str, value) {
    let h = this._hash(str);
    if (this.data[h] === undefined) {
      this.data[h] = value;
    } else {
      console.log(`This ${str} already value in it`);
    }
  }

  get(str) {
    let h = this._hash(str);
    if (this.data[h] !== undefined) {
      console.log(this.data[h]);
    } else {
      console.log(`This ${str} null value`);
    }
  }
}

const hashTable = new HashTable(50);

hashTable.set("grapes", 1000);
hashTable.set("apple", 845);
hashTable.set("Jucie", 874);
hashTable.set("Vitamin", 784);
console.log(hashTable);

hashTable.get("Vitamin");
