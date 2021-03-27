import React, { Component, Suspense } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";

const Header    = React.lazy(() => import('./Components/Header'));
const Footer    = React.lazy(() => import('./Components/Footer'));
const About     = React.lazy(() => import('./Components/About'));
const Resume    = React.lazy(() => import('./Components/Resume'));
const Contact   = React.lazy(() => import('./Components/Contact'));
const Portfolio = React.lazy(() => import('./Components/Portfolio'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio data={this.state.resumeData.portfolio} />
          <Contact data={this.state.resumeData.main} />
          <Footer data={this.state.resumeData.main} />
        </Suspense>
      </div>
    );
  }
}

export default App;
