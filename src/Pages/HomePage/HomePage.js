import React, { useEffect } from 'react'
import { HomePageClassesCard, HomePageContainer, HomePageDetailsButton,HomePageClassesImage,HomePageClassesImg,HomePageClassesTitle,HomePageDetails,HomePageDetailsText } from './HomePageElements';
import { useStateValue } from '../../StateProvider';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const [{user,classes,waitingList}, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if(user === '')
    {
      navigate('/login')
    }
    else{
      handleClasses();
    }
  }
  , [])

  const handleClasses = () => {
    for(let i = 0; waitingList.length > i; i++)
    {
      console.log('waitingList[i]',waitingList[i])
      if(classes[i].members.length < classes[i].maxMembers)
      {
        classes[i].members.push(user)
        dispatch({
          type: 'SET_CLASSES',
          classes: classes
        })
        navigate('/Class')
      }

    }
  }


  const handleJoin = (className) => {
    if(classes[className].members < classes[className].max){
      classes[className].members += 1
      dispatch({
        type : 'Add_MEMBER',
        classes : classes
      })
      dispatch({
        type: 'SET_CURRENTCLASS',
        currentClass: className
      })
      dispatch({
        type: 'SET_USER_CLASS',
        user_class: user
      })
      navigate('/Class')

    }
    else{
      waitingList.push([className,user]);
      dispatch({
        type: 'ADD_WAITING_LIST',
        payload: waitingList
      })
      alert('Class is full, you are added to waiting list');
    }
  }
  return (
    <div>
      {console.log('user',user)}
      {console.log('classes',classes)}
      {console.log('waitingList',waitingList)}
      <HomePageContainer>
        {classes.map((classItem,index) => {
          return(
        <HomePageClassesCard>
          <HomePageClassesTitle>
            {classItem.name}
          </HomePageClassesTitle>
          <HomePageClassesImg>
            <HomePageClassesImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          </HomePageClassesImg>
          <HomePageDetails>
            <HomePageDetailsText>
              {classItem.members}/{classItem.max}
            </HomePageDetailsText>
          </HomePageDetails>
          <HomePageDetailsButton onClick = {() => handleJoin(index)}>
            Join
          </HomePageDetailsButton>
        </HomePageClassesCard>
          )
        }
        )}
      </HomePageContainer>
    </div>
  )
}

export default HomePage