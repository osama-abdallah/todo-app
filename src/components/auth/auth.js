import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { If } from 'react-if';

const Auth=(props)=> {

  const contextType = useContext(AuthContext);

    let render = false;

   try {
     console.log(contextType.user)
     render = contextType.loggedIn && props.capability
     ? contextType?.user?.actions?.includes(props.capability)
     : false;
     console.log(render);
   } catch (error) {
    console.log('NOT AUTHORIZED', error.message);

   }
   
   
    return (
      <If condition={render}>
        <div>{props.children}</div>
      </If>
    )



}

export default Auth