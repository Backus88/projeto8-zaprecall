import Card from "./Card";
import React from "react";
import flip from "../../assets/imgs/flip.svg"


export default function Question({questions,index,flippedCard}){
    const [estage, setEstage] = React.useState(true);

    return (
        <>
        {(!flippedCard)?
            <div className="question">
                <h3> Pergunta {index}</h3>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            :
            <Card>
                {(estage)?
                <>
                    <h4>{questions}</h4> 
                    <img role="button" src={flip} onClick={()=> setEstage(false)} />
                </>
                 : 
                 <>
                    
                 </>
                 }
            </Card>
        }
        </>

    );
}