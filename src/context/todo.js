import React, {useState} from 'react';

export const toDoContext = React.createContext();

export default function ToDoContextComponent(props){
    const [incomplete, setIncomplete] = useState(0);

    const state = {
        incomplete:incomplete,
        setIncomplete: setIncomplete
    }
    return(
        <toDoContext.Provider value={state}>
            {props.children}
        </toDoContext.Provider>
    )
}