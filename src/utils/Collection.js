import uniqueID from "uuid/v1";

export class Collection {
  constructor(db) {
    this._db = db;
  }

  _save(data) {
    localStorage.setItem(this._db, JSON.stringify(data));
  }

  get(id) {
    const collections = localStorage.getItem(this._db);
    const data = collections ? JSON.parse(collections) : [];

    if (id) {
      return data.find(item => item.id === id);
    }

    return data;
  }

  unset() {
    localStorage.removeItem(this._db);
  }

  update(id, data) {
    const collections = this.get();

    if (collections) {
      const item = collections.map(item => {
        if (item.id === id) {
          item = {
            ...item,
            ...data
          };
        }
        return item;
      });

      this._save(item);
    }
  }
  create(data) {
    const collections = this.get();
    const id = uniqueID();
    const payload = {
      id,
      createdAt: Date.now(),
      ...data
    };

    this._save([...collections, payload]);

    return id;
  }
  delete(id) {
    const collections = this.get();

    this._save(collections.filter(item => item.id !== id));
  }
}
