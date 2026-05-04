const NoteCard = ({ note, index, onDelete, onEdit }) => {
  return (
    <div className="h-55 p-6 w-45 bg-white text-wrap rounded-2xl justify-between flex flex-col no-scrollbar overflow-y-auto">
      <div>
        <h3 className="text-xl pb-1 font-semibold underline">{note.title}</h3>
        <p className="leading-tight flex text-md text-gray-500">
          {note.detail}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onDelete(index)}
          className="bg-transparent border hover:border-red-500 font-medium px-2 py-1 rounded active:scale-95 hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(index)}
          className="bg-transparent border hover:border-green-500 font-medium px-2 py-1 rounded active:scale-95 hover:bg-green-500"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
