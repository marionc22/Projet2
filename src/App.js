import React from "react";
import "./App.css";
import Cases from "./components/Cases";
import PoserQuestion from "./components/PoserQuestion";

function App() {
  const board = [
    {
      categorie: "Arrivée",
    },
    {
      categorie: "Sport",
    },
    {
      categorie: "Film",
    },

    {
      categorie: "Musique",
    },

    {
      categorie: "Géographie",
    },

    {
      categorie: "Départ",
    },
  ];

  const géographie = {
    question: "Quelle est la capitale de la France?",
    reponse: "paris",
  };

  const film = {
    question: "Qui a réalisé Blade Runner?",
    reponse: "Riddley Scott",
  };

  const musique = {
    question: "Qui a chanté 'tu veux mon zizi'?",
    reponse: "francky vincent",
  };

  const sport = {
    categorie: "Sport",
    question: "Quel pays est actuellement champion du monde de foot?",
    reponse: "france",
  };

 
  let [player1, setPlayer1] = React.useState(1);
  let questionPosee = "Prêt à jouer?";

  function laQuestion() {
    if (board[player1].categorie === "Géographie") {
      questionPosee = géographie.question;
    }

    else if (board[player1].categorie === "Sport") {
      questionPosee = sport.question;
    }
   
  }

laQuestion();

 

  console.log (board[player1].categorie)
  console.log(questionPosee)

  if (player1 === 0) {
    alert("bravo tu as gagné!");
  }

  return (
    <div className = "jeu">
      <div className="plateau">
        {board.map((element, index) => (
          <Cases
            key={element.categorie}
            nom={element.categorie}
            player1Place={player1 === index ? "player 1" : ""}
          />
          ))}
      </div>

      <div className="poserQuestion">
          <PoserQuestion question = {questionPosee} /> 
      </div>
    </div>
   
  );
}
export default App;
