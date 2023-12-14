import OptionsContainer from "./OptionsContainer"
import GeneralInfo from "./GeneralInfo"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"

export default function InputContainer() {
    return (    
    <div className="input-container">
        <OptionsContainer />
        <GeneralInfo />
        <EducationInfo />
        <ExperienceInfo />
    </div>
)
}