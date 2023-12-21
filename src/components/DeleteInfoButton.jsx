export default function DeleteInfoButton ({ deleteKey, deleteItem }) {
    return (
        <button
            className="delete-button"
            onClick={() => deleteItem(deleteKey)}
        >
            Delete
        </button>
    )
}