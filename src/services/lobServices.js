const handleErrors = (res) => {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const sendPostcardToLob = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/postcards/send/${id}`, {
    method: 'POST',
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const sendPostcardToLob_v1 = (postcard) => {
  const auth = btoa(process.env.REACT_APP_LOB_SECRET_TEST_KEY);
  return fetch('https://api.lob.com/v1/postcards', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: 'Demo Postcard job',
      to: {
        name: 'Harry Zhang',
        address_line1: '185 Berry St',
        address_line2: '#6100',
        address_city: 'San Francisco',
        address_state: 'CA',
        address_zip: '94107'
      },
      front: '<html>Front HTML for</html>',
      back: '<html>Back HTML for</html>',
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const sendPostcardToLob_v2 = (postcard) => {
  const reqInit = {};
  const auth = btoa(process.env.REACT_APP_LOB_SECRET_TEST_KEY);
  const myHeaders = new Headers;
  myHeaders.append('Authorization', `Basic ${auth}`);
  myHeaders.append('Content-Type', 'application/json');
  reqInit.method = 'POST'; 
  reqInit.headers = myHeaders; 
  reqInit.credentials = 'include'; 
  reqInit.body = JSON.stringify({
    description: 'Demo Postcard job',
    to: {
      name: 'Harry Zhang',
      address_line1: '185 Berry St',
      address_line2: '#6100',
      address_city: 'San Francisco',
      address_state: 'CA',
      address_zip: '94107'
    },
    front: '<html>Front HTML for</html>',
    back: '<html>Back HTML for</html>',
  });

  return fetch('https://api.lob.com/v1/postcards', reqInit)
    .then(handleErrors)
    .then(res => res.json());
};
