import React, { useEffect, useState } from "react";
import "./app.css";
import DropdownHeader from "./DropdownHeader";
import DatePick from "./DatePicker";

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  // const data = require("./userData.json");
  // setUsers(data);
  // console.log("form app.js", users);

  useEffect(() => {
    setUsers(require("./userData.json"));
    console.log(users, "from use effect");
  }, []);
  console.log(users, "after use effect");

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      if (checked === true) setCount(users.length);
      if (checked === false) setCount(0);
      console.log("count", count);
    } else {
      let tempUser = users.map((user) =>
        user.name === name
          ? {
              ...user,
              isChecked: checked,
            }
          : user
      );
      setUsers(tempUser);
      // document.querySelectorAll('input[type=checkbox]:checked').length);
      const checkedUser = document.querySelectorAll(
        "input[type=checkbox]:checked"
      ).length;
      // users.filter((user) => user.isChecked === true);
      setCount(checkedUser);
    }
  };

  return (
    <div className="App">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-light dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <DropdownHeader count={count} />
        </button>
        <div class="dropdown-menu">
          <button class="dropdown-item" type="button">
            {/* SELECT-ALL COMPO */}
            <div className="select-all-container">
              <div className="text">Select All</div>
              <div className="check-box-all">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    name="allSelect"
                    id="flexCheckDefault"
                    onChange={handleChange}
                    checked={!users.some((user) => user.isChecked !== true)}
                  />
                  <label class="form-check-label" for="flexCheckDefault" />
                </div>
              </div>
            </div>
            {/* SELECT-ALL COMPO ENDS */}
          </button>
          <div className="search-container">
            <input
              className="searchBar"
              placeholder="Search Employee"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          {users
            .filter((user) => {
              if (searchItem === "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user, index) => (
              <button class="dropdown-item" type="button">
                {" "}
                {/* <UserComponent key={index} name={user.name} />{" "} */}
                {/* USER COMPO START */}
                <div className="user-container">
                  <div className="user-data">
                    <div className="user-image"></div>
                    <div className="username">
                      <p>{user.name}</p>
                    </div>
                  </div>
                  <div className="checkbox">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        name={user.name}
                        onChange={handleChange}
                        checked={user?.isChecked || false}
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                    </div>
                  </div>
                </div>
                {/* USER COMPO ENDS */}
              </button>
            ))}
        </div>
      </div>
      <div className="date-picker">
        <DatePick />
      </div>
    </div>
  );
}
