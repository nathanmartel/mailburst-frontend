const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const loginUser = (email, password) => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const signupUser = (email, password, firstName, lastName) => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const patchUser = (id, newObj) => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(newObj),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchUser = (id) => {
  console.log('passed ID is', id);
  return fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchAllUsers = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/`)
    .then(handleErrors)
    .then(res => res.json());
};
