import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "./components/List";
import {Route, Routes} from 'react-router-dom'
import { Profile } from "./components/Profile";
function App() {
  let [userData, setUserData] = useState([]);
useEffect(() => {
  axios
  .get("https://reqres.in/api/users")
  .then((json) => setUserData(json.data.data));
},[])
  return (
    <Routes>
       <Route path="/" element= {<List userData={userData}/>} />
       <Route path="/user/:userId" element= {<Profile userData={userData}/>} />
     
      </Routes>
  );
}

export default App;
