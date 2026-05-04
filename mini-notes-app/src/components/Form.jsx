const Form = ({
  title,
  detail,
  editIdx,
  onTitleChange,
  onDetailChange,
  onSubmit,
  onCancelEdit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="h-full lg:w-1/2  text-wrap flex flex-col gap-5 p-14 text-white"
    >
      <h1 className="font-bold text-4xl pb-4">ADD NOTES</h1>
      <input
        required
        onChange={(e) => onTitleChange(e.target.value)}
        value={title}
        className="px-5 py-3 lg:w-full border-2 outline-none font-medium rounded"
        type="text"
        placeholder="Enter note title"
      />
      <textarea
        required
        onChange={(e) => onDetailChange(e.target.value)}
        value={detail}
        className="px-5 py-2 h-35 lg:w-full border-2 outline-none font-medium rounded"
        placeholder="Write detail"
      ></textarea>
      <button
        type="submit"
        className={`px-5 py-2 lg:w-full border-2 outline-none font-medium rounded active:scale-95 transition-colors ${
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
          onClick={onCancelEdit}
          className="text-gray-400 hover:text-white underline text-sm"
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default Form;
