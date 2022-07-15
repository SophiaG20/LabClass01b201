'use strict';

function getUser(id) {
  let firstName = prompt('What is your first name?');
    let lastName = prompt('What is your last name?');
    let age = prompt('How old are you?');
    let city = prompt('What city do you live in?');
    if (id === 1) {
      return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city,
        id: id
      };
    }
  };
