export default function PreviewContainer({
    name,
    email,
    phoneNumber
    }) {
    return (
        
        <div className="preview-container">
            <div id="resume-preview">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
            </div>
        </div>
        
    )
}