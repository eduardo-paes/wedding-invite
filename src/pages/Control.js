import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomTabs from '../components/Tabs'

export default function Control(props) {
  const history = useHistory();
  try {
    console.log("Autorized: " + props.location.state.auth);
  } catch (error) {
    history.push('/login');
  }
  return (
    <div className="main-container">
      <CustomTabs/> 
    </div>
  )
}
