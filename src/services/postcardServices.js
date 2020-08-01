const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const createPostcard = async({ 
  userId,
  frontImage, 
  frontMessage, 
  backMessage,
  senderName,
  senderTitle
}) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/postcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      userId: userId,
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

