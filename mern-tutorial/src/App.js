import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ _id, set_id ] = useState('');
  const [ title , setTitle] = useState('');
  const [ description, setDescription ] = useState('');
  const [ tasks, setTasks ] = useState([]);

  const setState = {
    _id: set_id,
    title: setTitle,
    description: setDescription
  }

  useEffect(() => {
    fetchTasks();
  },[])

  const fetchTasks = () => {
    fetch('http://localhost:4000/api/tasks')
      .then( res => res.json())
      .then( data => {
        setTasks(data);
      })
      .catch(err => console.log(err));
  }

  const resetState = () => {
    Object.keys(setState).forEach((name) => {
      setState[name]('')
    });

  }

  const addTask = (e) => {
    e.preventDefault();
    if(_id) {
      fetch(`http://localhost:4000/api/tasks/${_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          description: description
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Task Updated'});
          resetState()
          fetchTasks();
        });
    } else {
      fetch('http://localhost:4000/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Task Saved'});
          resetState();
          fetchTasks();
        })
        .catch(err => console.error(err));
    }
  }

  const deleteTask = (id) => {
    if(window.confirm('Are you sure you want to delete it?')){
      fetch('http://localhost:4000/api/tasks/'+id,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        window.M.toast({html: 'Task Deleted'});
        fetchTasks();
      })
      .catch(err => console.log(err))
    }
  }

  const editTask = (id) => {
    fetch('http://localhost:4000/api/tasks/'+id)
    .then(res => res.json())
    .then(data => {
      set_id(data._id);
      setTitle(data.title);
      setDescription(data.description);
    })
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState[name](value);
  }

  return (
    <div className="App">
      {/* NAVIGATION */}
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <label>MERN Stack</label>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-content">
                <form onSubmit={ addTask }>
                  <div className="row">
                    <div className="input-field col s12">
                      <input name="title" onChange={handleChange} value={title} type="text" placeholder="Task Title" autoFocus/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea name="description" onChange={handleChange} value={description} cols="30" rows="10" placeholder="Task Description" className="materialize-textarea"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn light-blue darken-4">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map(task => {
                    return (
                        <tr key={task._id}>
                          <td>{task.title}</td>
                          <td>{task.description}</td>
                          <td>
                            <button onClick={() => deleteTask(task._id)} className="btn light-blue darken-4">
                              <i className="material-icons">delete</i>
                            </button>
                            <button onClick={() => editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
