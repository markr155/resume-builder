import DeleteInfoButton from "./DeleteInfoButton";
import EducationListItem from "./EducationListItem";

export default function PreviewContainer({
    name,
    email,
    phoneNumber,
    educationList
    }) {
    return (
        
        <div className="preview-container">
            <div id="resume-preview">
                <header>
                    <h4 className="resume-heading">General Information</h4>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                </header>
                <div className="education-section">
                    <h4 className="resume-heading">Education</h4>
                    <ul className="education-list">
                        <li>Harvard - Bachelor of Computer Science - 15/05/2020</li>
                        {educationList && educationList.map((education) => (
                            <li key={`${education.school}-${education.title}-${education.date}`}>
                                <EducationListItem
                                school={education.school}
                                title={education.title}
                                />
                                <DeleteInfoButton />
                            </li>
                        ))}
                    </ul>            
                </div>
                <div className="experience-section">
                    <h4 className="resume-heading">Experience</h4>

                </div>
            </div>

        </div>
        
    )
}