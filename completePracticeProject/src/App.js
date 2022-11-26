import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [dataList, setDataList] = useState([]);
  return (
    <div>
      <AddUser dataList={dataList} setDataList={setDataList} />
      <UsersList usersList={dataList} />
    </div>
  );
}

export default App;
