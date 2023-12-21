import OptionsContainer from "./OptionsContainer"
import GeneralInfo from "./GeneralInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"

export default function InputContainer({ 
    name,
    onNameChange,
    email,
    onEmailChange,
    phoneNumber,
    onPhoneNumberChange,
    educationList,
    newEducation,
    handleEducationInput,
    handleAddEducation,
    experienceList,
    newExperience,
    handleExperienceInput,
    handleAddExperience
}) {
    return (    
    <div className="input-container">
        <OptionsContainer />
        <GeneralInfo 
        name={name}
        onNameChange={onNameChange} 
        email={email}
        onEmailChange={onEmailChange}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={onPhoneNumberChange}
        />

        <EducationInfo 
        educationList={educationList}
        newEducation={newEducation}
        handleEducationInput={handleEducationInput}
        handleAddEducation={handleAddEducation}
        />

        <ExperienceInfo 
        experienceList={experienceList}
        newExperience={newExperience}
        handleExperienceInput={handleExperienceInput}
        handleAddExperience={handleAddExperience}
        />
    </div>
)
}