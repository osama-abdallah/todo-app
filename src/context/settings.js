import React, { useState, useEffect } from 'react';
export const settingsContext = React.createContext();
export default function Settings(props) {
    const [stateSettings, setStateSetting] = useState({
        displayCompleted: false,
        pageLimit: 4
    });
    const[submitFlag, setSubmitFlag] = useState(false);

    useEffect(() => {
        setStateSetting(JSON.parse(localStorage.getItem('pageSettingsContext')) || stateSettings);
        console.log(stateSettings);
    },[submitFlag]);
    const state = {
        displayCompleted: stateSettings.displayCompleted,
        pageLimit: stateSettings.pageLimit,
        submitFlag,
        setSubmitFlag
    }
    return (
        <settingsContext.Provider value={state}>
            {props.children}
        </settingsContext.Provider>
    )
}