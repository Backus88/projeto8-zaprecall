import Card from "./Card";
import React from "react";
import imgFlip from "../../assets/imgs/flip.svg"
import Finished from "./Finished";

export default function Question({questions,index,flip,setFlip,fliper,answers, setCanFlip,counter,setCounter,answer, setAnswer,right,setRight}){
    const className = ["done-red", "done-yellow" ,"done-green"];
    const iconName = ["close-circle", "help-circle","checkmark-circle"];
    const [estage, setEstage] = React.useState(true);
    const [done, setDone] = React.useState(true)
    const [icon, setIcon] = React.useState("");
    const[name, setName] =React.useState("");
    
    function renderDone(iconValue,nameValue){
        setIcon(iconValue);
        setName(nameValue);
        setDone(false);
        setCanFlip(true);
        setCounter(counter +1);
        const newIcon = [...answer];
        newIcon.push(iconValue);
        setAnswer(newIcon);
        console.log(newIcon);
        if(iconValue === "help-circle" || iconValue === "checkmark-circle") setRight(right +1);
    };

    return (
        <>
        {
        (!done)?
        <Finished icon = {icon} name = {name} index ={index}/>:
        (!flip[index])?
            <div className="question" onClick={()=> fliper(flip,setFlip,index)}>
                <h3> Pergunta {index+1}</h3>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            :
            <Card>
                {(estage)?
                <>
                    <h4>{questions}</h4> 
                    <img role="button" src={imgFlip} onClick={()=> setEstage(false)} />
                </>
                 : 
                <>
                    <h4>{answers}</h4>
                    <div className="card-answer">
                        <div className="vermelha" onClick={()=> renderDone(iconName[0],className[0])} >
                            <h5>Não</h5>
                            <h5>lembrei</h5>
                        </div>
                        <div className="amarela" onClick={()=> renderDone(iconName[1],className[1])}>
                            <h5>Quase não</h5>
                            <h5>lembrei</h5>
                        </div>
                        <div className="verde" onClick={()=> renderDone(iconName[2],className[2])}>
                            <h5>Zap</h5>
                        </div>
                    </div>
                </>
                 
                 }
            </Card>
        }
        </>

    );
}