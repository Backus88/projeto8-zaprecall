import Question from "../question/Question"
import littleZap from "../../assets/imgs/zapSmall.svg"

export default function WorkPage({questions,flippedCard}){
    return(
        <div className="frame start">
            <div className="work-title">
                <img src={littleZap} />
                <h1>ZapRecall</h1>
            </div>
            {questions.map((t, index)=> <Question  index={index+1} flippedCard = {flippedCard[index]}  questions={questions[index]}/>)}
        </div>
    )
}