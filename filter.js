const Filter = ({ onFilterChange }) => {
    return (
      <select onChange={(e) => onFilterChange(e.target.value)} className="p-2 border rounded bg-yellow-500 text-white my-4 flex text-center object-center w-80 text-xl">
        <option value="all">Todo</option>
        <option value="barcelona">FC Barcelona</option>
        <option value="real madrid">Real Madrid</option>
        <option value="manchester city">Manchester City</option>
        <option value="inter miami">Inter Miami</option>
        <option value="seleccion peruana">Selección peruana</option>
      </select>
    );
  };