import { useEffect, useMemo, useState } from "react";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";

interface NameItem {
  id: number;
  name: string;
}

function Names() {
  const [names, setNames] = useState<NameItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNames = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setNames(data);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const filteredNames = useMemo(() => {
    if (!searchTerm || searchTerm.length < 3) return names;

    return names.filter((name) => name.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, names]);

  return (
    <div className="names">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1>Names</h1>
      {filteredNames.map((name) => (
        <p key={name.id}><Link to={`/todo/${name.id}`}>{name.name}</Link></p>
      ))}
    </div>
  );
}

export default Names;
