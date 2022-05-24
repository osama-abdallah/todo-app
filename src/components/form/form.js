import React from 'react'
import useForm from '../../hooks/form';
import { Button } from "@blueprintjs/core";
import SettingsForm from '../settingsForm/settingsForm';
import Auth from '../auth/auth';

function Form(props) {
  const { handleChange, handleSubmit } = useForm(props.addItem);
  return (
    <div id='formContainer'>
      <Auth capability = "create">
      <form id='form' onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <Button type="submit">Add Item</Button>
        </label>
      </form>
    </Auth>
      <SettingsForm/>
    </div>
  )
}

export default Form