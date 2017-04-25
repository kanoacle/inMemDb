/*jshint esversion: 6*/
const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const userArray = [];

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

const byId = (id) => {
  if (typeof (id) !== 'number') {
    return 'Id number must be a number.';
  }
  return users[id.toString()];
};

const youngest = () => {
  let young;
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      userArray.push(users[key]);
      for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].age < young || young === undefined) {
          young = userArray[i].age;
        }
      }
    }
  }
  return young;
};

const oldest = () => {
  let old;
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      userArray.push(users[key]);
      for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].age > old || old === undefined) {
          old = userArray[i].age;
        }
      }
    }
  }
  return old;
};

const males  = () => {
  let males = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      userArray.push(users[key]);
      for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].gender === 'm' && males.indexOf(userArray[i]) === -1) {
          males.push(userArray[i]);
        }
      }
    }
  }
  return males;
};

const females = () => {
  let females = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      userArray.push(users[key]);
      for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].gender === 'f' && females.indexOf(userArray[i]) === -1) {
          females.push(userArray[i]);
        }
      }
    }
  }
  return females;
};

const employees = (employer) => {

};

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees
};

module.exports = functions;
