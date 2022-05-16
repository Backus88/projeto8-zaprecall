import Question from "../question/Question"
import littleZap from "../../assets/imgs/zapSmall.svg"
import React, { useState, useEffect } from 'react';

export default function WorkPage({flashCard, flip, setFlip,counter,setCounter,answer,setAnswer,right,setRight,clear,value}){
    const [canFlip, setCanFlip] = React.useState(true);

    //Allowing the cards to be flipped
    // useEffect(() => {
    //     setCanFlip(true);
    //   }, [clear]);

    //logic to flip the card and disallowing the possibility of flip in that card
   function fliper(flip,setFlip, index){
       if(canFlip){
        const newArr = [...flip];
        newArr[index] = true;
        setFlip(newArr);
        setCanFlip(false);
        }  
   }
   
   // logic to render the questions
    return(
        <div className="frame start">
            <div className="work-title">
                <img src={littleZap} />
                <h1>ZapRecall</h1>
            </div>
            {
                flashCard.slice(0,value).map((t, index)=> <Question  
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