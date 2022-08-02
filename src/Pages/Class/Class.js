import React from 'react'
import {useStateValue} from '../../StateProvider'
import {useNavigate} from 'react-router-dom'

const Class = () => {

  const [{classes,currentClass},dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleLeave = () => {
    classes[currentClass].members -= 1
    dispatch({
      type: 'SET_CLASSES',
      classes: classes
    })
    navigate('/HomePage')
  }

  return (
    <div>Class Joined!
      {console.log('classes_after',classes)}
      {console.log('currentClass_after',currentClass)}
      <button onClick = {() => handleLeave()}>Leave Class</button>
    </div>
  )
}

export default Class