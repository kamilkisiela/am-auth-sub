Meteor.startup(function() {
  // collection
  DummyCollection.remove({});

  ['foo', 'bar', 'baz'].forEach((name) => {
    DummyCollection.insert({
      name
    });
  });

  // users
  Meteor.users.remove({});

  Accounts.createUser({
    username: 'angular',
    mail: 'angular@angular.js',
    password: 'angular'
  });
});
