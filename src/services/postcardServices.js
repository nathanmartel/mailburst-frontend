const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const createPostcard = ({ 
  userId,
  campaignId,
  frontImage, 
  frontMessage, 
  backMessage,
  senderName,
  senderTitle,
  isDefault = false
}) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/postcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      userId: userId,
      campaignId: campaignId,
      isDefault: isDefault,
      frontImage: frontImage, 
      frontMessage: frontMessage, 
      backMessage: backMessage,
      senderName: senderName,
      senderTitle: senderTitle
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchPostcard = (id) => { 
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/postcards/${id}`)
    .then(handleErrors)
    .then(res => res.json());
};

export const patchPostcard = (id, newObj) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/postcards/${id}`, {
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
