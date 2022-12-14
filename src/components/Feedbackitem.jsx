import React, { useContext } from 'react'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'
import {FaTimes, FaEdit} from 'react-icons/fa'
const Feedbackitem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> editFeedback(item)} className="close"><FaEdit color='purple'/></button>
        <button onClick={()=>deleteFeedback(item.id)} className="close"><FaTimes color='purple'/></button>
        <div className="text-display">{item.text}</div>
    </Card> 
  )
}



export default Feedbackitem