export default function Finished ({name, icon,index}){
    return(
        <div className={name}>
            <h3> Pergunta {index+1}</h3>
            <ion-icon name={icon}></ion-icon>
        </div>
    );
}