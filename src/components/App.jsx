import { useState } from 'react'
import InputContainer from './InputContainer'
import PreviewContainer from './PreviewContainer'

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };
  const [email, setEmail] = useState('');

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  }

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber)
  };

  return (
    <>
    <InputContainer 
    name={name}
    onNameChange={handleNameChange}
    email={email}
    onEmailChange={handleEmailChange}
    phoneNumber={phoneNumber}
    onPhoneNumberChange={handlePhoneNumberChange}
    />
    <PreviewContainer
    name={name}
    email={email}
    phoneNumber={phoneNumber}
    />
    </>
  )
}

export default App
