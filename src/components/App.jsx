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
    key: '',
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
    const educationKey = `${newEducation.school}-${newEducation.title}-${newEducation.date}`
    setEducationList((currentList) => ([...currentList, {...newEducation, key: educationKey}]));
    setNewEducation({
      key: '',
      school: '',
      title: '',
      date: ''
    });
  }

  const [experienceList, setExperienceList] = useState([]);
  const [newExperience, setNewExperience] = useState({
    key: '',
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
    const experienceKey = `${newExperience.name}-${newExperience.title}`
    setExperienceList((currentList) => ([...currentList, {...newExperience, key: experienceKey}]));
    setNewExperience({
      key: '',
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

  const handleDeleteExperienceItem = (key) => {
    const newExperienceList = experienceList.filter((experience) => experience.key !== key);
    setExperienceList(newExperienceList);
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
    handleDeleteEducationItem={handleDeleteEducationItem}
    handleDeleteExperienceItem={handleDeleteExperienceItem}
    />
    </>
  )
}

export default App
