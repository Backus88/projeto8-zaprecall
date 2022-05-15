import zap from "../../assets/imgs/zap.svg"


export default function IntialPage({pages, shuffle}){
    

    return(
        <div className="frame">
            <img src={zap} />
            <h1>ZapRecall</h1>
            <div class ="button" role = "button" onClick={() =>shuffle(pages)}>
                Iniciar Reacall!
            </div>
        </div>
    );
}