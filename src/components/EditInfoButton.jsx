export default function EditInfoButton({ editKey, editItem }) {
  return (
    <>
      <button
        className="edit-button list-button"
        title="Edit"
        onClick={() => editItem(editKey)}
      >
        Edit
      </button>
    </>
  );
}
