export default function EducationInfo({
  newEducation,
  educationList,
  handleEducationInput,
  handleAddEducation,
}) {
  return (
    <div className="education information">
      <h4 className="form-header">Education Experience</h4>

      <form className="info-form">
        <label htmlFor="school">School Name</label>
        <input
          name="school"
          type="text"
          value={newEducation.school}
          onChange={(e) => handleEducationInput(e)}
        />

        <label htmlFor="title">Title of Study</label>
        <input
          name="title"
          type="text"
          value={newEducation.title}
          onChange={(e) => handleEducationInput(e)}
        />

        <label htmlFor="date">Date Completed</label>
        <input
          name="date"
          type="date"
          value={newEducation.date}
          onChange={(e) => handleEducationInput(e)}
        />
      </form>

      <button
        className="options-button"
        id="add-education-button"
        title="Add Education"
        onClick={() => handleAddEducation()}
      >
        Add Education
      </button>
    </div>
  );
}
