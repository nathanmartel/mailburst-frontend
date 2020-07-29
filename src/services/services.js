const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const loginUser = (email, password) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
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
    .then(res => res.json())
    .then(json => console.log(json));
};
