export default function SearchBar() {
  return (
    <div className="mb-8 flex justify-center gap-4">
      <input
        type="text"
        placeholder="Search by keyword or genre..."
        className="px-4 py-2 w-2/3 rounded-xl text-black"
      />
      <button className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-500">
        Search
      </button>
    </div>
  );
}