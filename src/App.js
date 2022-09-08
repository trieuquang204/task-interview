import React, { useState } from "react";
import './App.css';
import DatePicker from "react-datepicker";

//Initial tasks
const tasks = [
  { name: "task 1", des: 'Des1', dueDate: '12/6/2022', piority: 'Normal' },
  { name: "task 2", des: 'Des2', dueDate: '12/6/2022', piority: 'Low' },
  { name: "task 3", des: 'Des3', dueDate: '12/6/2022', piority: 'High' },
];

function App() {
  // const [startDate, setStartDate] = useState(new Date());


  return (
    <div className='main-content'>
      <div className='container'>
        <div className='content-inner'>
          <div className='new-task'>
            <h3 className='new-task__title'> New Task</h3>
            <div className='new-task__input'>
              <input
                placeholder='Add new task'
              />
            </div>
            <div className='new-task__des'>
              <label>Description</label>
              <textarea/>
            </div>
            <div className='group-date'>
              <div className='group-date__due'>
                <label>Due Date</label>
                <DatePicker
                 selected={startDate}
                 onChange={(date:Date) => setStartDate(date)}
                 minDate={new Date()}
                />
              </div>
              <div className='group-date__piority'>
                <label>Piority</label>
                <select>
                  <option value="normal">normal</option>
                  <option value="low">Low</option>
                  <option  value="High">High</option>
                </select>
              </div>
            </div>
            <div className="btn">
              <button>
                Add
              </button>
            </div>
          </div>
          <div className="todo">
            <div className="new-task new-task--noboder">
              <h3 className='new-task__title'> To Do List</h3>
              <div className='new-task__input'>
                <input
                  placeholder='Search...'
                />
              </div>
            </div>
            <div className="todo-list">
              <div className="single-item">
                <div className="item-header">
                  <div className="group-task">
                    <input type="checkbox" id="todo" name="todo" value="Bike" />
                    <label htmlFor="todo"> Do homework</label>
                  </div>
                  <div className="group-btn">
                    <button className="btn-detail">Detail</button>
                    <button className="btn-remove">Remove</button>
                  </div>
                </div>
                <div className="item-detail">
                  <div className='new-task__input'>
                    <input
                      placeholder='Do homework'
                      value="Do homework"
                    />
                  </div>
                  <div className='new-task__des'>
                    <label>Description</label>
                    <textarea/>
                  </div>
                  <div className='group-date'>
                    <div className='group-date__due'>
                      <label>Due Date</label>
                      <DatePicker
                      selected={startDate}
                      onChange={(date:Date) => setStartDate(date)}
                      minDate={new Date()}
                      />
                    </div>
                    <div className='group-date__piority'>
                      <label>Piority</label>
                      <select>
                        <option value="normal">normal</option>
                        <option value="low">Low</option>
                        <option  value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bulk">
              <div className="bulk-txt">
                <p>Bulk Action</p>
              </div>
              <div className="group-active">
                <button className="btn-detail">Done</button>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
