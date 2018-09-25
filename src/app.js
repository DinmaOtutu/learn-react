const pet = (props) => {
 return React.createElement("div", {}, [
   React.createElement("h1", {}, props.name),
   React.createElement("h2", {}, props.animal),
   React.createElement("h3", {}, props.breed),
 ])
}

class App extends React.Component {
  handleTitleClick() {
    alert("YEE!! yOU clicked me");
  }
  render() {
    return React.createElement("div", {}, [// the empty braces is where the attributes like 
      React.createElement('h1', { onClick: this.handleTitleClick }, 'adopt A cat'),
      React.createElement(pet, {
       name: "luna",
       animal: "dog",
       breed: "asian castle"
      }),
      React.createElement(pet, {
        name: "escort",
        animal: "dog",
        breed: "asian castle"
      }),
      React.createElement(pet, {
        name: "billy",
        animal: "dog",
        breed: "asian castle"
      })
      ])
    }
  }

ReactDOM.render(React.createElement(App), document.getElementById('root'));
