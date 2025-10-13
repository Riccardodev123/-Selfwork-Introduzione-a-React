import { useEffect, useState } from "react";

export default function LoadingData() {
  const [users, setUsers] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`Errore HTTP! status: ${response.status}`);
      }
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  }

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        fetchUsers();
        setIsLoading(false);
      }, 2000);
    }
  }, [trigger]);

  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
      setTrigger(false);
      setUsers(null);
    } else {
      setIsVisible(true);
      setTrigger(true);
      setIsLoading(true);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click to fetch</button>
      {isLoading && <p>fetching data...</p>}
      <ul>
        {isVisible &&
          users &&
          users.map((user) => (
            <li key={user.id}>
              Nome: {user.name}, Email: {user.email}
            </li>
          ))}
      </ul>
    </>
  );
}
