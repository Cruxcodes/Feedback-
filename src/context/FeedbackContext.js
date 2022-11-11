import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a way of telling me something",
      rating: 8,
    },
  ]);
  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false
  })

  // deleteFeedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are u sure u want to delete that")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit : true
    })
  }

  // update feedback
  const updateFeedback = (id,newitem) =>{
    setFeedback(feedback.map((item)=> (item.id === id ?{...item,...newitem} : item)))
  }

  //addFeedback 
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([...feedback, newFeedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        // feedback: feedback, is the same as just feedback
        feedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
        addFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
