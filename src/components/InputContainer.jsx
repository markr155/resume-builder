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
    onPhoneNumberChange
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

        <EducationInfo />
        <ExperienceInfo />
    </div>
)
}