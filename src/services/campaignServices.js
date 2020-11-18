import { createPostcard, patchPostcard } from './postcardServices';
import { createAddress } from './addressServices';

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
  recipient
},
  addressInfo,
  postcardInfo
) => {
  const addressObj = await createAddress(addressInfo);
  postcardInfo.isDefault = true;
  const postcardObj = await createPostcard(postcardInfo); 
  return fetch(`${process.env.REACT_APP_API_URL}/campaigns`, {
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
      addressId: addressObj._id,
      defaultPostcardId: postcardObj._id
    }),
    credentials: 'include'
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => patchPostcard(postcardObj._id, { campaignId: json._id }));
};

export const fetchCampaign = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/campaigns/${id}`)
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchAllCampaigns = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/campaigns/`)
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchUserCampaigns = (userId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/campaigns/user/${userId}`)
    .then(handleErrors)
    .then(res => res.json());
};
