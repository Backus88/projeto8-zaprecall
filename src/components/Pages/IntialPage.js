import zap from "../../assets/imgs/zap.svg"
import React from "react"

export default function IntialPage({pages, shuffle,cards,setValue}){
    const[meta,setMeta]= React.useState(false);
    
    let aux = cards;
    const getInputValue = (event)=>{
        event.preventDefault();
        console.log(event.target.value);
        aux = event.target.value;
        if(aux!= NaN &&aux > 0) {
            // aux = Math.floor(aux);
            if(aux <= cards){
                setMeta(true);
                setValue(aux);
            }else{
                setValue(cards);
                setMeta(false)
            }
        }else{
            setMeta(false);
            setValue(cards)
        }
    };

    return(
        <div className="frame">
            <img src={zap} />
            <h1>ZapRecall</h1>
            <input type="number" placeholder="Digite sua meta de zaps..." onChange={getInputValue} />
            {(meta)?     
                <div class ="button" role = "button" onClick={() =>shuffle(pages)}>
                    Iniciar Recall!
                </div>
            :
                <>
                    <div class ="button-grey">
                        Iniciar Recall!
                    </div>
                </>
            }
            
        </div>
    );
}