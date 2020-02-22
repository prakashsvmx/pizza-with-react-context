import React from "react";
import PizzaLineItem from "components/PizzaLineItem";
import PizzaCartContext from "PizzaCartContext/PizzaCartContext";
import { PizzaSizes } from "constants/Constants";
const PizzaList = () => {
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-6-desktop is-1-mobile"></div>
        <div className="column">
          <PizzaCartContext.Consumer>
            {({ small, onPizzaIncrement, onPizzaDecrement }) => (
              <PizzaLineItem
                iconSize="is-small"
                text="Small"
                textStyle="title is-6"
                count={small}
                onIncrement={() => {
                  onPizzaIncrement(PizzaSizes.SMALL);
                }}
                onDecrement={() => {
                  onPizzaDecrement(PizzaSizes.SMALL);
                }}
              />
            )}
          </PizzaCartContext.Consumer>
        </div>
      </div>

      <div className="columns">
        <div className="column is-6-desktop is-1-mobile"></div>
        <div className="column">
          <PizzaCartContext.Consumer>
            {({ medium, onPizzaIncrement, onPizzaDecrement }) => (
              <PizzaLineItem
                iconSize="is-medium"
                text="Medium"
                textStyle="title is-5"
                count={medium}
                onIncrement={() => {
                  onPizzaIncrement(PizzaSizes.MEDIUM);
                }}
                onDecrement={() => {
                  onPizzaDecrement(PizzaSizes.MEDIUM);
                }}
              />
            )}
          </PizzaCartContext.Consumer>
        </div>
      </div>

      <div className="columns">
        <div className="column is-6-desktop is-2-mobile"></div>
        <div className="column">
          <PizzaCartContext.Consumer>
            {({ large, onPizzaIncrement, onPizzaDecrement }) => (
              <PizzaLineItem
                iconSize="is-medium"
                text="Large"
                textStyle="title is-4"
                count={large}
                onIncrement={() => {
                  onPizzaIncrement(PizzaSizes.LARGE);
                }}
                onDecrement={() => {
                  onPizzaDecrement(PizzaSizes.LARGE);
                }}
              />
            )}
          </PizzaCartContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
