import { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      try {
        return JSON.parse(savedNotes);
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
        return [];
      }
    }
    return [];
  });
  const [editIdx, setEditIdx] = useState(null);

  // Save notes to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
    console.log("Notes saved to localStorage:", task);
  }, [task]);

  const formHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];

    if (editIdx !== null) {
      copyTask[editIdx] = { title, detail };
      setEditIdx(null);
    } else {
      copyTask.push({ title, detail });
    }

    setDetail("");
    setTitle("");
    setTask(copyTask);
  };

  // editNote
  const editNote = (idx) => {
    const copyTask = [...task];
    const note = copyTask[idx];
    setTitle(note.title);
    setDetail(note.detail);
    setEditIdx(idx);
    console.log(idx + " edited");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black overflow-auto no-scrollbar overflow-y-auto">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="h-full lg:w-1/2 flex flex-col gap-5 p-14 text-white"
      >
        <h1 className="font-bold text-4xl pb-4">ADD NOTES</h1>
        <input
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="px-5 py-3 lg:w-full border-2 outline-none font-medium rounded"
          type="text"
          placeholder="Enter note title"
        />
        <textarea
          required
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
          className="px-5 py-2 h-35 lg:w-full border-2 outline-none font-medium rounded"
          placeholder="Write detail"
        ></textarea>
        <button
          type="submit"
          className={`px-5 py-2 lg:w-full cursor-pointer border-2 outline-none font-medium rounded active:scale-95 transition-colors ${
            editIdx !== null
              ? "bg-green-500 text-white"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          {editIdx !== null ? "Save Changes" : "Add Note"}
        </button>
        {editIdx !== null && (
          <button
            type="button"
            onClick={() => {
              setEditIdx(null);
              setTitle("");
              setDetail("");
            }}
            className="text-gray-400 hover:text-white underline cursor-pointer text-sm"
          >
            Cancel Edit
          </button>
        )}
      </form>
      <div className="h-full lg:border-l-white lg:border-l-2 lg:w-1/2 p-14">
        <h1 className="font-bold text-4xl pb-7 text-white">Your Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto h-full no-scrollbar justify-star items-start overflow-y-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-55 p-6 w-45 bg-white rounded-2xl justify-between flex flex-col no-scrollbar overflow-y-auto"
              >
                <div>
                  <h3 className="text-xl pb-1 font-semibold underline">
                    {elem.title}
                  </h3>
                  <p className="leading-tight flex text-md text-gray-500">
                    {elem.detail}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className=" bg-transparent border hover:border-red-500 font-medium px-2 py-1 rounded active:scale-95 hover:bg-red-600 cursor-pointer"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      editNote(idx);
                    }}
                    className=" bg-transparent border hover:border-green-500 font-medium px-2 py-1 rounded active:scale-95 hover:bg-green-500 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

// import { useState } from "react";
// import Form from "./components/Form";
// import NotesList from "./components/NotesList";

// const App = () => {
//   const [title, setTitle] = useState("");
//   const [detail, setDetail] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editIdx, setEditIdx] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedNotes = [...notes];

//     if (editIdx !== null) {
//       updatedNotes[editIdx] = { title, detail };
//       setEditIdx(null);
//     } else {
//       updatedNotes.push({ title, detail });
//     }

//     setNotes(updatedNotes);
//     setTitle("");
//     setDetail("");
//   };

//   const handleDelete = (idx) => {
//     setNotes(notes.filter((_, i) => i !== idx));
//   };

//   const handleEdit = (idx) => {
//     const note = notes[idx];
//     setTitle(note.title);
//     setDetail(note.detail);
//     setEditIdx(idx);
//   };

//   const handleCancelEdit = () => {
//     setEditIdx(null);
//     setTitle("");
//     setDetail("");
//   };

//   return (
//     <div className="h-screen lg:flex bg-black overflow-auto no-scrollbar overflow-y-auto">
//       <Form
//         title={title}
//         detail={detail}
//         editIdx={editIdx}
//         onTitleChange={setTitle}
//         onDetailChange={setDetail}
//         onSubmit={handleSubmit}
//         onCancelEdit={handleCancelEdit}
//       />
//       <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
//     </div>
//   );
// };

// export default App;
