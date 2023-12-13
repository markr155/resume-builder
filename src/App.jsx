import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>

    <div className="input-container">
      <div className="options-container">
        <button className="options-button" id='save'>Save</button>
        <button className="options-button" id="customise">Customise</button>
      </div>

      <div className="general information">

      <form className="info-form">
        <h4 className='form-header'>General Information</h4>
        <label>Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Phone</label>
        <input type="text" />
      </form>

      </div>
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
    </div>

    <div className="preview-container">
      <div id="resume-preview">

      </div>
    </div>

    </>
  )
}

export default App
