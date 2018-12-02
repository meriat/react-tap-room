import React from 'react';
import AddBeerForm from './AddBeerForm';
import ConfirmQuestions from './ConfirmQuestions';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleContent = <AddBeerForm />;
    }
    else {
      currentlyVisibleContent = <ConfirmQuestions onTroubleshootingConfirmation = {this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div className='container'>
        <style jsx>
          {`
        .container{
            color:white;
        }
        `}
        </style>
        {currentlyVisibleContent}
      </div>
    );
  }
}
  
export default NewBeerControl;