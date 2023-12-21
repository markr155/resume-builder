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

  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    school: '',
    title: '',
    date: ''
  })

  const handleEducationInput = (e) => {
    const { name, value } = e.target;
    setNewEducation((currentEducation) => ({
      ...currentEducation,
      [name]: value
    }));
  }

  const handleAddEducation = () => {
    setEducationList((currentList) => ([...currentList, newEducation]));
    setNewEducation({
      school: '',
      title: '',
      date: ''
    });
  }

  return (
    <>
    <InputContainer 
    name={name}
    onNameChange={handleNameChange}
    email={email}
    onEmailChange={handleEmailChange}
    phoneNumber={phoneNumber}
    onPhoneNumberChange={handlePhoneNumberChange}
    educationList={educationList}
    newEducation={newEducation}
    handleEducationInput={handleEducationInput}
    handleAddEducation={handleAddEducation}
    />
    <PreviewContainer
    name={name}
    email={email}
    phoneNumber={phoneNumber}
    educationList={educationList}
    />
    </>
  )
}

export default App
