import NoteCard from "./NoteCard";

const NotesList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="h-full lg:border-l-white text-wrap lg:border-l-2 lg:w-1/2 p-14">
      <h1 className="font-bold text-4xl pb-7 text-white">Your Notes</h1>
      <div className="flex flex-wrap gap-5 overflow-auto h-full no-scrollbar justify-start items-start overflow-y-auto">
        {notes.length === 0 ? (
          <p className="text-gray-400">No notes yet. Add one to get started!</p>
        ) : (
          notes.map((note, idx) => (
            <NoteCard
              key={idx}
              note={note}
              index={idx}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotesList;
