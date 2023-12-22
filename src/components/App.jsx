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
      date: "22-12-2022",
    },
    {
      key: "University of Australia-Masters of Computer Science-22-12-2023",
      school: "University of Australia",
      title: "Masters of Computer Science",
      date: "22-12-2023",
    },
  ];

  const testExperienceList = [
    {
      key: "The Local-Executive in charge of Fermentation Refreshment Distribution",
      name: "The Local",
      title: "Executive in charge of Fermentation Refreshment Distribution",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus repudiandae quos dolor consequatur dignissimos soluta tempora consequuntur ex corporis voluptas ut eos suscipit sit?",
      dateFrom: "01-01-2018",
      dateTo: "11-10-2021",
    },
    {
      key: "Tiny Repair Store-Backstore Goblin",
      name: "Tiny Repair Store",
      title: "Backstore Goblin",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi laudantium eaque repellat inventore. Nihil labore laborum perferendis minima dolore minus officiis magni fuga impedit nobis nostrum alias explicabo, commodi tenetur nesciunt dolorum libero id aut nemo sed incidunt voluptatibus.",
      dateFrom: "20-04-2016",
      dateTo: "06-09-2018",
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

  const handleDeleteEducationItem = (key) => {
    const newEducationList = educationList.filter(
      (education) => education.key !== key,
    );
    setEducationList(newEducationList);
  };

  const handleDeleteExperienceItem = (key) => {
    const newExperienceList = experienceList.filter(
      (experience) => experience.key !== key,
    );
    setExperienceList(newExperienceList);
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
      />
    </>
  );
}

export default App;
