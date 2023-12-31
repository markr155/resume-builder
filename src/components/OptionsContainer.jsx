export default function OptionsContainer() {
  return (
    <>
      <div className="options-container">
        <button 
        className="options-button" 
        id="save" 
        title="Save Resume"
        onClick={() => window.open()}>
          Save Resume
        </button>

        <button className="options-button" id="customise" title="Customise">
          Customise
        </button>
      </div>
    </>
  );
}
