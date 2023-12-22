export default function EducationListItem({ school, title, date }) {
  return (
    <div className="list-item-container">
      <h4>{school}</h4>
      <p>{title}</p>
      <p>Completed {date}</p>
    </div>
  );
}
