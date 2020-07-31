import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import CampaignForm from '../../../components/CampaignForm/CampaignForm';
import { createCampaign } from '../../../services/campaignServices';
import { AuthContext } from '../../../context/AuthContext';

const ScreensCampaignCreate = () => {

  const authContext = useContext(AuthContext);
  
  const [isLoading, setIsLoading] = useState(false);
  const [createSuccess, setCreateSuccess] = useState('');
  const [createError, setCreateError] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recipient, setRecipient] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleAddress1Change = (e) => setAddress1(e.target.value);
  const handleAddress2Change = (e) => setAddress2(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleZipChange = (e) => setZip(e.target.value);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setCreateError('');
    try {
      const campaign = await createCampaign(campaignInfo);
      console.log('campaign: ', campaign);
      setIsLoading(false);
      setCreateSuccess('Campaign creation successful!');
    }
    catch (error) {
      setIsLoading(false);
      setCreateError(error.message);
    }
  };

  const campaignInfo = {
    userId: authContext._id,
    title: title,
    description: description,
    recipient: recipient,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zip: zip,
  };

  const campaignFormStubProps = {
    title: title,
    description: description,
    recipient: recipient,
    onTitleChange: handleTitleChange,
    onDescriptionChange: handleDescriptionChange,
    onRecipientChange: handleRecipientChange,
  };

  const addressFormStubProps = {
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zip: zip,
    onAddress1Change: handleAddress1Change,
    onAddress2Change: handleAddress2Change,
    onCityChange: handleCityChange,
    onStateChange: handleStateChange,
    onZipChange: handleZipChange,
  };

  const campaignFormProps = {
    campaignFormStubProps: campaignFormStubProps,
    addressFormStubProps: addressFormStubProps,
    onSubmit: handleSubmit
  };

  return (
    <Container className="p-3">
      <h1 className="header">Create a Campaign</h1>
      <CampaignForm {...campaignFormProps} />
      {isLoading && <p>Logging in...</p> }
      {createSuccess && <p>{createSuccess}</p> }
      {createError && <p>{createError}</p> }
    </Container>
  );
};

export default ScreensCampaignCreate;
