
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './Firebase';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>
          This is a bootstrap button
        </button>
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <h3>{localStorage.getItem("photoURL")}</h3>
      </>
    );
  }
}

export default App;
