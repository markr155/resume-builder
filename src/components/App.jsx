import { useState } from "react";
import InputContainer from "./InputContainer";
import PreviewContainer from "./PreviewContainer";

function App() {
  const testGeneralInfo = {
    name: "Mork Morkington",
    email: "MorkNork@real.me",
    phone: "08 6666 9399",
  };

  const testEducationList = [
    {
      key: "University of Australia-Bachelor of Computer Science-22-12-2022",
      school: "University of Australia",
      title: "Bachelor of Computer Science",
      date: "2022-12-22",
    },
    {
      key: "University of Australia-Masters of Computer Science-22-12-2023",
      school: "University of Australia",
      title: "Masters of Computer Science",
      date: "2023-12-22",
    },
  ];

  const testExperienceList = [
    {
      key: "The Local-Executive in charge of Fermentation Refreshment Distribution",
      name: "The Local",
      title: "Executive in charge of Fermentation Refreshment Distribution",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus repudiandae quos dolor consequatur dignissimos soluta tempora consequuntur ex corporis voluptas ut eos suscipit sit?",
      dateFrom: "2018-01-01",
      dateTo: "2021-11-10",
    },
    {
      key: "Tiny Repair Store-Backstore Goblin",
      name: "Tiny Repair Store",
      title: "Backstore Goblin",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi laudantium eaque repellat inventore. Nihil labore laborum perferendis minima dolore minus officiis magni fuga impedit nobis nostrum alias explicabo, commodi tenetur nesciunt dolorum libero id aut nemo sed incidunt voluptatibus.",
      dateFrom: "2016-20-04",
      dateTo: "2018-06-09",
    },
  ];

  const [name, setName] = useState(testGeneralInfo.name);
  const handleNameChange = (newName) => {
    setName(newName);
  };

  const [email, setEmail] = useState(testGeneralInfo.email);
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phoneNumber, setPhoneNumber] = useState(testGeneralInfo.phone);
  const handlePhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const [educationList, setEducationList] = useState(testEducationList);
  const [newEducation, setNewEducation] = useState({
    key: "",
    school: "",
    title: "",
    date: "",
  });

  const handleEducationInput = (e) => {
    const { name, value } = e.target;
    setNewEducation((currentEducation) => ({
      ...currentEducation,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    const educationKey = `${newEducation.school}-${newEducation.title}-${newEducation.date}`;
    setEducationList((currentList) => [
      ...currentList,
      { ...newEducation, key: educationKey },
    ]);
    setNewEducation({
      key: "",
      school: "",
      title: "",
      date: "",
    });
  };

  const handleDeleteEducationItem = (key) => {
    const newEducationList = educationList.filter(
      (education) => education.key !== key,
    );
    setEducationList(newEducationList);
  };

  const handleEditEducationItem = (key) => {
    const selectedItem = educationList.find(
      (education) => education.key === key,
    );
    setNewEducation(selectedItem);
    handleDeleteEducationItem(key);
  };

  const [experienceList, setExperienceList] = useState(testExperienceList);
  const [newExperience, setNewExperience] = useState({
    key: "",
    name: "",
    title: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleExperienceInput = (e) => {
    const { name, value } = e.target;
    setNewExperience((currentExperience) => ({
      ...currentExperience,
      [name]: value,
    }));
  };

  const handleAddExperience = () => {
    const experienceKey = `${newExperience.name}-${newExperience.title}`;
    setExperienceList((currentList) => [
      ...currentList,
      { ...newExperience, key: experienceKey },
    ]);
    setNewExperience({
      key: "",
      name: "",
      title: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    });
  };

  const handleDeleteExperienceItem = (key) => {
    const newExperienceList = experienceList.filter(
      (experience) => experience.key !== key,
    );
    setExperienceList(newExperienceList);
  };

  const handleEditExperienceItem = (key) => {
    const selectedItem = experienceList.find(
      (experience) => experience.key === key,
    );
    setNewExperience(selectedItem);
    handleDeleteExperienceItem(key);
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
        handleEditEducationItem={handleEditEducationItem}
        handleEditExperienceItem={handleEditExperienceItem}
      />
    </>
  );
}

export default App;
