export default function ExperienceInfo() {
    return (
        <div className="experience information">
            <h4 className='form-header'>Practical Experience</h4>
            
            <form className="info-form">
                <label>Company Name</label>
                <input type="text" />
                <label>Position Title</label>
                <input type="text" />
                <label >Main Responsibilities</label>
                <textarea name="experience-responsiblities" id="experience-responsiblities" cols="30" rows="10" ></textarea> 
                <label>Date From</label>
                <input type="date" />
                <label>Date Until</label>
                <input type="date" />
            </form>
            <button className="options-button" id="add-experience-button">Add Experience</button>
        </div>
    )
}