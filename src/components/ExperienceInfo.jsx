export default function ExperienceInfo({
    experienceList,
    newExperience,
    handleExperienceInput,
    handleAddExperience,
}) {
    return (
        <div className="experience information">
            <h4 className='form-header'>Practical Experience</h4>
            
            <form className="info-form">
                <label htmlFor="name">Company Name</label>
                <input 
                type="text"
                name="name"
                value={newExperience.name} 
                onChange={(e) => handleExperienceInput(e)}
                />

                <label htmlFor="title">Position Title</label>
                <input 
                type="text" 
                name="title"
                value={newExperience.title}
                onChange={(e) => handleExperienceInput(e)}
                />

                <label htmlFor="responsibilities">Main Responsibilities</label>
                <textarea 
                name="responsibilities" 
                id="responsibilities" 
                cols="30" rows="10"
                value={newExperience.responsibilities}
                onChange={(e) => handleExperienceInput(e)}            
                ></textarea> 

                <label htmlFor="dateFrom">Date From</label>
                <input 
                name="dateFrom"
                type="date"
                value={newExperience.dateFrom}
                onChange={(e) => handleExperienceInput(e)}
                />

                <label htmlFor="dateTo">Date Until</label>
                <input 
                name="dateTo"
                type="date"
                value={newExperience.dateTo}
                onChange={(e) => handleExperienceInput(e)} 
                />
            </form>
            <button 
            className="options-button" 
            id="add-experience-button"
            onClick={() => handleAddExperience()}
            >Add Experience</button>
        </div>
    )
}