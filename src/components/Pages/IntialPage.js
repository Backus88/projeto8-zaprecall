import zap from "../../assets/imgs/zap.svg"
import React from "react"

export default function IntialPage({pages, shuffle,cards,setValue}){
    const[meta,setMeta]= React.useState(false);
    
    
    const getInputValue = (event)=>{
        event.preventDefault();
        let aux = cards;
        if(!isNaN(Number(event.target.value))){
            const userValue = event.target.value;
            aux = Number(userValue);
        }
        if(!isNaN(aux)&&aux > 0) {
            aux = Math.floor(aux) ;
            if(aux<= cards){
                setMeta(true);
                setValue(aux);
            }else{
                setValue(cards);
            }
        }else{
            setValue(cards)
        }
    };

    return(
        <div className="frame">
            <img src={zap} />
            <h1>ZapRecall</h1>
            {(meta)?     
                <div class ="button" role = "button" onClick={() =>shuffle(pages)}>
                    Iniciar Recall!
                </div>
            :
                <>
                    <input type="text" placeholder="Digite sua meta de zaps..." onChange={getInputValue} />
                    <div class ="button-grey">
                        Iniciar Recall!
                    </div>
                </>
            }
            
        </div>
    );
}