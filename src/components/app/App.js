import "../../assets/reset.css";
import "../../assets/style.css";
import React from "react";
import IntialPage from "../Pages/IntialPage";
import WorkPage from "../Pages/WorkPage";
import Footer from "../footer/Footer";

const contadorInicial = 0;

export default function App(){


    const questions= ["Nome do avô do Luffy", "Qual oceano o luffy nasceu", "Qual é a primeira recompensa do luffy", "Quem ensinou haki pro luffy"];
    const flippedCard = new Array(questions.length).fill(false);
    const cards = questions.length;
    const pages = ["intialPage", "cardPage", "bonusPage"]
    const[right, setRight] = React.useState(0);
    const [footer, setfooter] = React.useState(false);
    const [card, setCard] = React.useState();
    const[answer, setAnswer] = React.useState([]);
    const [page, setPage] = React.useState(pages[0]);
    const [counter, setCounter] = React.useState(0);
    
    
    return(
        <>
            {page === pages[0]? <IntialPage setPage={setPage} pages = {pages} /> : <WorkPage questions={questions} flippedCard={flippedCard}/>}
            {
                (footer) ?
                    <Footer>
                        {counter}/{cards} concluídos
                    </Footer >
                    : null
            }
            {
                (answer.length > 0) ?
                    <Footer>
                        {answer.map(() => <ion-icon name={answer}></ion-icon>)}
                    </Footer>
                    : null
            }
            {
                (answer.length === cards.length) ?
                    <Footer>
                        {(answer.length === right) ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns... Mas não desanime!"}
                    </Footer>
                    : null
            }
            
        </>
        
    );


}