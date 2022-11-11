import React from 'react'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length == 0){
        return <p>No Feedback Yet.</p>
    }
  return (
    <div >
    {feedback.map((item, index) => {
        return <Feedbackitem key={item.id} item={item} />;
      })}
    </div>
  )
}


export default FeedbackList