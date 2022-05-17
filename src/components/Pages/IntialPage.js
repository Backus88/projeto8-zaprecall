import zap from "../../assets/imgs/zap.svg"
import React from "react"

export default function IntialPage({pages, shuffle,cards,setValue}){
    const[meta,setMeta]= React.useState(false);
    
    
    const getInputValue = (event)=>{
        event.preventDefault();
        let aux = cards;
        if(Number(event.target.value) !== NaN){
            aux= event.target.value;
        }
        aux = Number(aux);
        if(aux!= NaN &&aux > 0) {
            aux = Math.floor(aux) ;
            if(aux <= cards){
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
            <input type="text" placeholder="Digite sua meta de zaps..." onChange={getInputValue} />
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