import "../../assets/reset.css";
import "../../assets/style.css";
import party from "../../assets/imgs/party.svg"
import sad from "../../assets/imgs/sad.svg"
import React from "react";
import IntialPage from "../Pages/IntialPage";
import WorkPage from "../Pages/WorkPage";
import Footer from "../footer/Footer";

const contadorInicial = 0;

export default function App(){

    //The estates variables
    const [flashCard, setFlashCard] = React.useState([{ questions: "Nome do avô do Luffy", answers: "Garp" },
    { questions: "Qual oceano o luffy nasceu", answers: "East Blue" },
    { questions: "Qual é a primeira recompensa do luffy", answers: "30.000.000 berries" },
    { questions: "Quem ensinou haki pro luffy", answers: "Rayleight" },
    { questions: "Akuma no mi do Luffy", answers: "HitoHito-Nika-Human model" }
    ]);

    const x = [];
    const flippedCard = new Array(flashCard.length).fill(false);
    const cards = flashCard.length;
    const pages = ["intialPage", "cardPage", "bonusPage"];
    const [flip, setFlip] = React.useState(flippedCard);
    const[right, setRight] = React.useState(0);
    const [footer, setFooter] = React.useState(false);
    const [card, setCard] = React.useState();
    const[answer, setAnswer] = React.useState(x);
    const [page, setPage] = React.useState(pages[0]);
    const [counter, setCounter] = React.useState(0);
    const [clear, setClear] = React.useState(false);
   
    // function that randomized the cards
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
    // function that reset the components, going back to the first page
    function clearStates(){
        setFlip(flippedCard);
        setRight(0);
        setFooter(false);
        const newArr = [];
        setAnswer(newArr);
        setPage(pages[0]);
        setCounter(0);
        setClear(true);
    }

   // logic to initialez the first compnents IntialPage that represents the first page, and to load the component WorkPage from the
   // Intialpage, and the logic to intialize the Fotter using children props.
    return(
        <>
            {page === pages[0]? <IntialPage  pages = {pages} shuffle = {shuffle} /> : <WorkPage
            flashCard={flashCard}
            flip={flip} 
            setFlip = {setFlip} 
            counter ={counter} 
            setCounter={setCounter}
            answer = {answer}
            setAnswer = {setAnswer}
            right = {right}
            setRight = {setRight} 
            clear = {clear}
            />
            }
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
                         <h2>
                            {counter}/{cards} concluídos
                        </h2> 
                        <div className="footer-icon">
                            {answer.map((y,x) => <ion-icon name={answer[x]}></ion-icon>)}
                        </div>
                    </Footer>
                    : null
            }
            {
                (answer.length === cards) ?
                    <Footer>
                        {(answer.length === right) ?
                        <>
                            <div className="well">
                                <img src={party} />
                                <h6>Parabéns!</h6>
                            </div>
                            <h2>Você não esqueceu de  </h2>
                            <h2>nenhum flashcard!</h2>
                        </>
                         : 
                         <>
                            <div className="well">
                                <img src={sad} />
                                <h6>Putz...</h6>
                            </div>
                            <h2>Ainda faltam alguns...</h2>
                            <h2> Mas não desanime!</h2>
                         </>}
                        <h2>
                            {counter}/{cards} concluídos
                        </h2> 
                        <div className="footer-icon">
                            {answer.map((y,x) => <ion-icon name={answer[x]}></ion-icon>)}
                        </div>
                        <div className="restart" onClick={()=> clearStates()}>
                            REINICIA RECALL
                        </div>
                    </Footer>
                    : null
            }
            
        </>
        
    );


}