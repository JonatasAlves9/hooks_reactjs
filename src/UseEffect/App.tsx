import React, {
  useState,
  useEffect
} from 'react';

interface User {
  name: string,
  login: string,
  avatar_url: string,
}

function App() {

  const [user, setUser] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/JonatasAlves9');
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    loadData();
  }, [user])


  return (
    <div>
      <p>Nome do usuário: {user?.name}</p>
      <p>login do usuário: {user?.login}</p>
      <p>Url do avatar: {user?.avatar_url}</p>
    </div>
  );
}

export default App;
