import zap from "../../assets/imgs/zap.svg"


export default function IntialPage({pages, setPage}){
    

    return(
        <div className="frame">
            <img src={zap} />
            <h1>ZapRecall</h1>
            <div class ="button" role = "button" onClick={() =>setPage(pages[1])}>
                Iniciar Reacall!
            </div>
        </div>
    );
}