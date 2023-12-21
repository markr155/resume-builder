export default function EducationListItem({
    school,
    title,
    date
}) {
    return (
        <p>{school} - {title} - {date}</p>
    )
}