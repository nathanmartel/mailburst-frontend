const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const createCampaign = async({ 
  userId,
  title, 
  description, 
  recipient,
  address1,
  address2,
  city,
  state,
  zip,
}) => {
  const addressObj = await createAddress(address1, address2, city, state, zip);
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/campaign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      userId: userId,
      title: title, 
      description: description, 
      recipient: recipient,
      addressId: addressObj.addressId
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const createAddress = ({ 
  address1,
  address2,
  city,
  state,
  zip,
}) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/addresses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

