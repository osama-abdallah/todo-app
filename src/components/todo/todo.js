import React, { useContext, useEffect, useState } from 'react';
import Form from '../form/form';
import {When} from 'react-if'
import List from '../list/list';
import { AuthContext } from '../../context/auth';
import Login from '../login/login';
import SignUp from '../signup/signup';
import { v4 as uuid } from 'uuid';
import "@blueprintjs/core/lib/css/blueprint.css";


const ToDo = () => {
  const logging = useContext(AuthContext)

  const [list, setList] = useState(JSON.parse(localStorage.getItem('tasks'))||[]);
  const [incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    let data = { id: uuid(), text: item.text, assignee: item.assignee, complete: false, difficulty: item.difficulty }
    setList([...list, data]);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }
  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    localStorage.setItem('tasks',JSON.stringify(list))
  }, [list]);

  return (
    <>
      <h1>To Do List: {incomplete} Items Pending</h1>
      <div id='container'>
        <When condition ={logging.loggedIn}>

      <Form addItem={addItem} />
      <List deleteItem={deleteItem} list={list} toggleComplete={toggleComplete} />
    
      </When>
      <When condition = {!logging.loggedIn}>
        <Login/>
        <SignUp/>
      </When>
    </div>
    </>
  );
};

export default ToDo;