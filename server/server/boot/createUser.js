'use strict';
var installed = true;
module.exports = function(app) {
  if (!installed) {
    var User = app.models.accounts;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    User.create([{
      firstname: 'Admin',
      lastname: 'Keren',
      phone: '021',
      role: 'admin',
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    }, {
      firstname: 'Guest',
      lastname: 'Keren',
      phone: '021',
      role: 'guest',
      username: 'guest',
      email: 'guest@gmail.com',
      password: 'guest'
    }], function(err, users) {
      if (err) throw err;
      console.log("create user", users);
      //create the admin role
      Role.create({
       name: users[0].role
      }, function(err, role) {
        if (err) throw err;
        console.log(role);
        //make bob an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[0].id
        }, function(err, principal) {
          console.log('Created principal:', principal);
        });
      });
      //batas
      Role.create({
       name: users[1].role
      }, function(err, role) {
        if (err) throw err;
        console.log(role);
        //make bob an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[1].id
        }, function(err, principal) {
          console.log('Created principal:', principal);
        });
      });
    });
  }

}
