import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    console.log(task);

    const copyTask = [...task];
    copyTask.push({ title, detail });

    setDetail("");
    setTitle("");
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="px-5 py-3 lg:w-full border-2 outline-none font-medium rounded"
          type="text"
          placeholder="Enter note title"
        />
        <textarea
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
          className="px-5 py-2 h-35 lg:w-full border-2 outline-none font-medium rounded"
          placeholder="Write detail"
        ></textarea>
        <button
          type="submit"
          className="px-5 py-2 lg:w-full border-2 outline-none font-medium bg-white text-black rounded active:scale-95 hover:bg-gray-300"
        >
          Add Note
        </button>
      </form>
      <div className="h-full lg:border-l-white lg:border-l-2 lg:w-1/2 p-14">
        <h1 className="font-bold text-4xl pb-7 text-white">Your Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto h-full no-scrollbar overflow-y-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-55 p-6 w-45 bg-white rounded-2xl no-scrollbar overflow-y-auto"
              >
                <h3 className="text-2xl pb-1 font-semibold">{elem.title}</h3>
                <p className="leading-tight text-lg text-gray-500">
                  {elem.detail}
                </p>
                <button className="bg-red-600">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
