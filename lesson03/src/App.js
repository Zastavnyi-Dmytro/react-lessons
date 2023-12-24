import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Users from "./components/Users";
import UsersComponent from './components/UsersComponent'
import Child1 from "./components/context/Child1";
import Child2 from "./components/context/Child2";

export const AppContext = createContext(null)

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const message = 'Hello from SubChild2_2';
  

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  const getUsers = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    } catch {}
  };
  const getPosts = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    } catch {}
  };

  return (
    <div>
      {/* Завдання 1 */}
      <h1>Property Drill</h1>
      <Users users={users} />
      {/*  */}
      {/* Завдання 2 */}
      <h1>State Lifting</h1>
      <UsersComponent users={users} posts={posts}/>
      {/*  */}
      {/* Завдання 3 */}
      <AppContext.Provider value={message}>
        <Child1 />
        <Child2 />
      </AppContext.Provider>
      {/*  */}
    </div>
    
  );
}

export default App;
