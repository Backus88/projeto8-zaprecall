import Question from "../question/Question"
import littleZap from "../../assets/imgs/zapSmall.svg"
import React from "react";

export default function WorkPage({flashCard, flip, setFlip,counter,setCounter,answer,setAnswer,right,setRight}){
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
                flashCard.map((t, index)=> <Question  
                index={index}
                 flip= {flip}
                setFlip={setFlip}
                questions={flashCard[index].questions} 
                answers = {flashCard[index].answers}
                fliper = {fliper}
               setCanFlip = {setCanFlip}
               counter = {counter}
               setCounter ={setCounter}
               answer ={answer}
               setAnswer={setAnswer}
               right = {right}
               setRight = {setRight}
                />)     
            }
        </div>
    )
}