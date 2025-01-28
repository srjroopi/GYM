const Menu = () => {
    const names: string[] = ["Shoulders", "Chest", "Charlie", "David", "Eve"];

  return (
    <>
    <div>Menu</div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Name List</h1>
        <ul className="space-y-2">
          {names.map((name, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Menu