import DeleteInfoButton from "./DeleteInfoButton";
import EditInfoButton from "./EditInfoButton.jsx";
import EducationListItem from "./EducationListItem.jsx";
import ExperienceListItem from "./ExperienceListItem.jsx";

export default function PreviewContainer({
  name,
  email,
  phoneNumber,
  educationList,
  experienceList,
  handleDeleteEducationItem,
  handleDeleteExperienceItem,
  handleEditEducationItem,
  handleEditExperienceItem,
}) {
  return (
    <div className="preview-container">
      <div id="resume-preview">
        <header className="general-info-section">
          <h4 className="resume-heading">General Information</h4>
          <div className="general-info-container">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
          </div>
        </header>
        <div className="education-section">
          <h3 className="resume-heading">Education</h3>
          <ul className="education-list">
            {educationList &&
              educationList.map((education) => (
                <li className="list-item" key={education.key}>
                  <EducationListItem
                    school={education.school}
                    title={education.title}
                    date={education.date}
                  />
                  <div className="list-button-container">
                    <EditInfoButton
                      editKey={education.key}
                      editItem={handleEditEducationItem}
                    />
                    <DeleteInfoButton
                      deleteKey={education.key}
                      deleteItem={handleDeleteEducationItem}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="experience-section">
          <h3 className="resume-heading">Experience</h3>
          <ul className="experience-list">
            {experienceList &&
              experienceList.map((experience) => (
                <li key={experience.key} className="list-item">
                  <ExperienceListItem
                    name={experience.name}
                    title={experience.title}
                    responsibilities={experience.responsibilities}
                    dateFrom={experience.dateFrom}
                    dateTo={experience.dateTo}
                  />
                  <EditInfoButton
                    editKey={experience.key}
                    editItem={handleEditExperienceItem}
                  />
                  <DeleteInfoButton
                    deleteItem={handleDeleteExperienceItem}
                    deleteKey={experience.key}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
