export default function ExperienceListItem({
    name,
    title,
    responsibilities,
    dateFrom,
    dateTo
}) {
    return (
        <>
        <p>{name} - {title}</p>
        <p>From {dateFrom} until {dateTo}</p>
        <p>{responsibilities}</p>
        </>
        
    )
}