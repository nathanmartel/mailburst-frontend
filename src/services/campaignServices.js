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
  street1,
  street2,
  city,
  state,
  zip,
}) => {
  const addressObj = await createAddress(street1, street2, city, state, zip);
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/campaigns`, {
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
      addressId: addressObj._id
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const createAddress = (street1, street2, city, state, zip) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/addresses`, {
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

