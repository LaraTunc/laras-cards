export const firstNameIsValid = (firstName) => {
  if (firstName.length < 2) {
    return false;
  } else {
    return true;
  }
};

export const lastNameIsValid = (lastName) => {
  if (lastName.length < 1) {
    return false;
  } else {
    return true;
  }
};

export const emailIsValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const passwordIsValid = (password) => {
  // must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.match(passw)) {
    return true;
  } else {
    return false;
  }
};

export const passwordIsEntered = (password) => {
  if (password.length < 4) {
    return false;
  } else {
    return true;
  }
};
