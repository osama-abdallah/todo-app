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

  const [list, setList] = useState([]);
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

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <h1>To Do List: {incomplete} Items Pending</h1>
      <div id='container'>
        <When condition ={logging.loggedIn}>

      <Form addItem={addItem} />
      <List list={list} toggleComplete={toggleComplete} />
    
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