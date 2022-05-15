import Question from "../question/Question"
import littleZap from "../../assets/imgs/zapSmall.svg"
import React from "react";

export default function WorkPage({answers,questions,flip, setFlip}){
    const [canFlip, setCanFlip] = React.useState(true);

   function fliper(flip,setFlip, index){
       if(canFlip){
        const newArr = [...flip];
        newArr[index] = true;
        setFlip(newArr);
        setCanFlip(false);
        }  
   }
   
    return(
        <div className="frame start">
            <div className="work-title">
                <img src={littleZap} />
                <h1>ZapRecall</h1>
            </div>
            {
                questions.map((t, index)=> <Question  
                index={index}
                 flip= {flip}
                setFlip={setFlip}
                questions={questions[index]} 
                answers = {answers[index]}
                fliper = {fliper}
               setCanFlip = {setCanFlip}
                />)     
            }
        </div>
    )
}