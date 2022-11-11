import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    // For ratings average
    let average =feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/feedback.length;

    average = Math.round(average)
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Ratings: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats