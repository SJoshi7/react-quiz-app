import React, {Component} from 'react';
import "./style.css";
import ReactDOM from 'react-dom';
import quizService from './quizService';

class Quiz extends Component {
  state = {
    questionBank:[]
  };
  getQuestion = () => {
    quizService().then(question=> {
      this.setState({
        questionBank:question
      });
    });
  };
  componentDidMount(){
    this.getQuestion();
  }
  render(){
    return(
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(
          ({question,answers,correct,questionId})=><h4>{question}</h4>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Quiz/>,document.getElementById('root'));
