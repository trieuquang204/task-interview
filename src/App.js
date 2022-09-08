import React, { useState } from "react";
import format from "date-fns/format";
import './App.css';
import DatePicker from "react-datepicker";


function App() {
  const [startDate, setStartDate] = useState(new Date())


  const [dueDate, setDueDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const [state, setState] = useState({
    task: '',
    des: '',
    dueDate: dueDate,
    piority: 'normal',
    inputValue: '',
  });

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = () => {
    // setTasks([...tasks, state]);
    // setState({
    //   task: '',
    //   des: '',
    //   dueDate: '',
    //   piority: 'normal',
    // })

    console.log('test', state)
  };

  // handleDateChange = date => {
  //   let selectedDateFromCalender = date.toUTCString();
  //   this.setState({
  //     actualStartDate: selectedDateFromCalender,
  // })}

  console.log('test', startDate)
  return (
    <div className='main-content'>
      <div className='container'>
        <div className='content-inner'>
          <div className='new-task'>
            <h3 className='new-task__title'> New Task</h3>
            <div className='new-task__input'>
              <input
                placeholder='Add new task'
                name='task'
                value={state.task}
                onChange={handleChange}
              />
            </div>
            <div className='new-task__des'>
              <label>Description</label>
              <textarea
                name='des'
                value={state.des}
                onChange={handleChange}
              />
            </div>
            <div className='group-date'>
              <div className='group-date__due'>
                <label>Due Date</label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                />
              </div>
              <div className='group-date__piority'>
                <label>Piority</label>
                <select name='piority' onChange={handleChange} value={state.piority}>
                  <option value="normal">normal</option>
                  <option value="low">Low</option>
                  <option  value="High">High</option>
                </select>
              </div>
            </div>
            <div className="btn">
              <button onClick={onSubmit} >
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
                      selected={dueDate}
                      onChange={(date:Date) => setDueDate(date)}
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
