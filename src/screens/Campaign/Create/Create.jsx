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
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [frontImage, setFrontImage] = useState('');
  const [frontImageFile, setFrontImageFile] = useState('');
  const [frontMessage, setFrontMessage] = useState('');
  const [backMessage, setBackMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderTitle, setSenderTitle] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleStreet1Change = (e) => setStreet1(e.target.value);
  const handleStreet2Change = (e) => setStreet2(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleZipChange = (e) => setZip(e.target.value);
  const handleFrontImageFileChange = (e) => setFrontImageFile(e.target.value);
  const handleFrontImageChange = (e) => setFrontImage(e.target.value);
  const handleFrontMessageChange = (e) => setFrontMessage(e.target.value);
  const handleBackMessageChange = (e) => setBackMessage(e.target.value);
  const handleSenderNameChange = (e) => setSenderName(e.target.value);
  const handleSenderTitleChange = (e) => setSenderTitle(e.target.value);


  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log('submitting: ', campaignInfo);
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
  }

  const campaignInfo = {
    userId: authContext.authState._id,
    title: title,
    description: description,
    recipient: recipient,
    street1: street1,
    street2: street2,
    city: city,
    state: state,
    zip: zip,
    frontImage: frontImage,
    frontImageFile: frontImageFile,
    frontMessage: frontMessage,
    backMessage: backMessage,
    senderName: senderName,
    senderTitle: senderTitle,
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
    street1: street1,
    street2: street2,
    city: city,
    state: state,
    zip: zip,
    onStreet1Change: handleStreet1Change,
    onStreet2Change: handleStreet2Change,
    onCityChange: handleCityChange,
    onStateChange: handleStateChange,
    onZipChange: handleZipChange,
  };

  const postcardFormStubProps = {
    frontImage: frontImage,
    frontImageFile: frontImageFile,
    frontMessage: frontMessage,
    backMessage: backMessage,
    senderName: senderName,
    senderTitle: senderTitle,
    onFrontImageFileChange: handleFrontImageFileChange,
    onFrontImageChange: handleFrontImageChange,
    onFrontMessageChange: handleFrontMessageChange,
    onBackMessageChange: handleBackMessageChange,
    onSenderNameChange: handleSenderNameChange,
    onSenderTitleChange: handleSenderTitleChange,
  };

  const campaignFormProps = {
    campaignFormStubProps: campaignFormStubProps,
    addressFormStubProps: addressFormStubProps,
    postcardFormStubProps: postcardFormStubProps,
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
