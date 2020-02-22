import React from "react";
import "./bulma_styles.scss";
import PizzaCart from "containers/PizzaCart";

function App() {
  return (
    <div className="container is-fluid">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Pizza Order</h1>
          </div>
        </div>
      </section>

      <PizzaCart />
    </div>
  );
}

export default App;
