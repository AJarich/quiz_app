import React, {useState} from 'react';
import './App.css';

function App() {
  const questions = [
		{
			questionText: 'What is house that Harry Potter belongs to?',
			answerOptions: [
				{ answerText: 'Slytherin', isCorrect: false },
				{ answerText: 'Hufflepuff', isCorrect: false },
				{ answerText: 'Gryffindor', isCorrect: true },
				{ answerText: 'Ravenclaw', isCorrect: false },
			],
		},
		{
			questionText: 'What is the full name of JK Rowling?',
			answerOptions: [
				{ answerText: 'Jane Katherine Rowling', isCorrect: false },
				{ answerText: 'Joanne Kathleen Rowling', isCorrect: true },
				{ answerText: 'Jamie Kathy Rowling', isCorrect: false },
				{ answerText: 'Joanna Katherine Rowling', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the main villain of Harry Potter?',
			answerOptions: [
				{ answerText: 'Lord Voldemort', isCorrect: true },
				{ answerText: 'Dolores Umbridge', isCorrect: false },
				{ answerText: 'Bellatrix Lestrange', isCorrect: false },
				{ answerText: 'Peter Pettigrew', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    const questionNumber = questionNum + 1;

    if(isCorrect === true){
      setScore(score + 1);
    }

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
      setQuestionNum(questionNumber);
    } else {
      setShowScore(true);
    }
  }

  const handleGoBackClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setQuestionNum(1);
    setScore(0);
  }
  return (
    <div className="app">
    {/* HINT: replace "false" with logic to display the
    score when the user has answered all the questions */}
    {showScore ? (
      <div className='score-section'><p>You scored {score} out of {questions.length}</p><br/><br/>
      <button className='go-back-button' onClick={handleGoBackClick}>Go Back to the Beginning</button>
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {questionNum}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) =>
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          )}
        </div>
      </>
    )}
    </div>
  );
}

export default App;
