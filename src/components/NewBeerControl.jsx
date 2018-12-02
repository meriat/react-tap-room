class NewBeerControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }
    render(){
      return (
        <div>
          <p>This is the NewBeerControl component!</p>
        </div>
      );
    }
  }
  
  export default NewBeerControl;