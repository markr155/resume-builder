export default function EducationInfo() {
    return (
        <div className="education information">
            <h4 className='form-header'>Education Experience</h4>

            <form className="info-form">
                <label>School Name</label>
                <input type="text" />
                <label>Title of study</label>
                <input type="text" />
                <label>Date of study</label>
                <input type="date" />
            </form>
            <button className="options-button" id="add-education-button">Add Education</button>
        </div>
    )
}