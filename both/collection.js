DummyCollection = new Mongo.Collection('dummy');

DummyCollection.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});
