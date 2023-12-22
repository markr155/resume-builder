export default function ExperienceListItem({
  name,
  title,
  responsibilities,
  dateFrom,
  dateTo,
}) {
  return (
    <div className="list-item-container">
      <h4>
        {title} at {name}
      </h4>
      <p>
        From {dateFrom} until {dateTo}
      </p>
      <p>{responsibilities}</p>
    </div>
  );
}
