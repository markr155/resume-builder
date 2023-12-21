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

  const [experienceList, setExperienceList] = useState([]);
  const [newExperience, setNewExperience] = useState({
    name: '',
    title: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleExperienceInput = (e) => {
    const { name, value } = e.target;
    setNewExperience((currentExperience) => ({
      ...currentExperience,
      [name]: value,
    }));
  }

  const handleAddExperience = () => {
    setExperienceList((currentList) => ([...currentList, newExperience]));
    setNewExperience({
      name: '',
      title: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: ''
    });
  }

  const handleDeleteEducationItem = (key) => {
    const newEducationList = educationList.filter((education) => education.key !== key);
    setEducationList(newEducationList);
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

    experienceList={experienceList}
    newExperience={newExperience}
    handleExperienceInput={handleExperienceInput}
    handleAddExperience={handleAddExperience}
    />
    <PreviewContainer
    name={name}
    email={email}
    phoneNumber={phoneNumber}
    educationList={educationList}
    experienceList={experienceList}
    />
    </>
  )
}

export default App
