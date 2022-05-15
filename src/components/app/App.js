import "../../assets/reset.css";
import "../../assets/style.css";
import React from "react";
import IntialPage from "../Pages/IntialPage";
import WorkPage from "../Pages/WorkPage";
import Footer from "../footer/Footer";

const contadorInicial = 0;

export default function App(){

    
    const [flashCard, setFlashCard] = React.useState([{ questions: "Nome do avô do Luffy", answers: "Garp" },
    { questions: "Qual oceano o luffy nasceu", answers: "East Blue" },
    { questions: "Qual é a primeira recompensa do luffy", answers: "30.000.000 berries" },
    { questions: "Quem ensinou haki pro luffy", answers: "Rayleight" },
    { questions: "Akuma no mi do Luffy", answers: "HitoHito-Nika-Human model" }
    ]);

    const flippedCard = new Array(flashCard.length).fill(false);
    const cards = flashCard.length;
    const pages = ["intialPage", "cardPage", "bonusPage"];
    const [flip, setFlip] = React.useState(flippedCard);
    const[right, setRight] = React.useState(0);
    const [footer, setFooter] = React.useState(false);
    const [card, setCard] = React.useState();
    const[answer, setAnswer] = React.useState([]);
    const [page, setPage] = React.useState(pages[0]);
    const [counter, setCounter] = React.useState(0);
   
    // randoming the cards
    function shuffle (pages){
            for (let i = flashCard.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [flashCard[i], flashCard[j]] = [flashCard[j], flashCard[i]];
            }
            const newArray = [...flashCard];
            setPage(pages[1]);
            setFlashCard(newArray);
            setFooter(true);
    }
   
    return(
        <>
            {page === pages[0]? <IntialPage  pages = {pages} shuffle = {shuffle} /> : <WorkPage flashCard={flashCard} flip={flip} setFlip = {setFlip} counter ={counter} setCounter={setCounter} />}
            {
                (footer) ?
                    <Footer>
                       <h2>
                            {counter}/{cards} concluídos
                        </h2> 
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