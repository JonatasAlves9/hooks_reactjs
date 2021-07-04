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
    console.log(data)
    setUser(data);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <div>
      <p>{user?.name}</p>
    </div>
  );
}

export default App;
