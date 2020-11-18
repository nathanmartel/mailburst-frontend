const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const createAddress = ({ 
  street1, 
  street2, 
  city, 
  state, 
  zip
}) => {
  return fetch(`${process.env.REACT_APP_API_URL}/addresses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      street1: street1,
      street2: street2,
      city: city,
      state: state,
      zip: zip
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};
