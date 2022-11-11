import Card from "./shared/Card"
import { useState, useEffect } from "react"
import Button from "./shared/Button" 
import RatingSelect from "./RatingSelect"
import { FaDove } from "react-icons/fa"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'


const FeedbackForm = () => {
  const [text,setText] = useState('')
  const [btnDisabled,setbtnDisabled] = useState(true)
  const [rating,setRating] = useState(10)
  const [message,setMessage] = useState('')
  const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  const handleTextChange= (e) =>{
    if(text ==''){
      setbtnDisabled(true)
      setMessage(null)
    }else if(text != 0 && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setbtnDisabled(true)
    }else{
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEdit.edit == true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
        feedbackEdit.edit = false
      }
      else{
      addFeedback(newFeedback)
      }
      setText('')
    }
  }

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setbtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      
    }
  }, [feedbackEdit])
  return (
    <Card>
      <form action="#" onSubmit={handleSubmit}>
        <h2>How would u rate your service with us?</h2>
        {/* todo rating select component */}
        <RatingSelect select = {(rating)=>{console.log(rating);setRating(rating)}}/>
        <div className="input-group">
          <input type="text" placeholder="Write a review" className="formInput" value={text}onChange={handleTextChange} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm