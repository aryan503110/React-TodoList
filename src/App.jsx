import React from "react";
import { useState } from "react";

const App = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData([...listData, activity]);
    setActivity("");
  }

  function removeActivity(i) {
    const updatedList = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedList);
  }

  function removeAll() {
    setlistData([]);
  }

  return (
    <div className="todo-container">
      <div>
        <h1 className="todo-header">Todo List</h1>
      </div>
      <input
        className="todo-input "
        type="text"
        placeholder="Enter Your Task..."
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      ></input>
      <button className="todo-add-btn" onClick={addActivity}>
        Add Task
      </button>
      <div>
        <h3>Pending Tasks Here -</h3>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="taskitem">
                    <div>{data}</div>
                    <div>
                      <button
                        className="todo-add-btn"
                        onClick={() => {
                          removeActivity(i);
                        }}
                      >
                        Remove Task
                      </button>
                    </div>
                  </div>
                </p>
              </>
            );
          })}
      </div>
      {listData.length >= 1 && (
        <button className="todo-add-btn" onClick={removeAll}>
          Remove All Tasks
        </button>
      )}
    </div>
  );
};

export default App;
