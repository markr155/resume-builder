export default function DeleteInfoButton({ deleteKey, deleteItem }) {
  return (
    <button
      className="delete-button list-button"
      title="Delete"
      onClick={() => deleteItem(deleteKey)}
    >
      Delete
    </button>
  );
}
