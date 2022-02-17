import React, { Component } from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SinglePage from "./Pages/SinglePage/SinglePage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.setActivePage = this.setActivePage.bind(this);
    this.setSelectedChar = this.setSelectedChar.bind(this);
    this.povecajActivePage = this.povecajActivePage.bind(this);
    this.umanjiActivePage = this.umanjiActivePage.bind(this);
    this.state = {
      data: [],
      activePage: 1,
      selectedChar: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.activePage}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  }

  setSelectedChar(charID) {
    this.setState({
      selectedChar: charID,
    });
  }

  povecajActivePage() {
    if (this.state.activePage < 42) {
      this.setState({
        activePage: this.state.activePage + 1,
      });
    } else {
      alert("Nema dalje!");
    }
  }

  umanjiActivePage() {
    if (this.state.activePage < 0) {
      this.setState({
        activePage: this.state.activePage - 1,
      });
    } else {
      alert("Nema dalje!");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activePage !== this.state.activePage) {
      this.fetchData();
    }
  }

  fetchData() {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.activePage}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  }

  setActivePage(klik) {
    this.setState({ activePage: klik });
  }

  render() {
    return (
      <div>
        {!this.state.selectedChar && (
          <HomePage
            setSelectedChar={this.setSelectedChar}
            characters={this.state.data}
            povecaj={this.povecajActivePage}
            umanji={this.umanjiActivePage}
            activePage={this.state.activePage}
            setActivePage={this.setActivePage}
          />
        )}
        {!!this.state.selectedChar && (
          <SinglePage
            data={this.state.data.find((e) => e.id === this.state.selectedChar)}
          />
        )}
      </div>
    );
  }
}

export default App;
