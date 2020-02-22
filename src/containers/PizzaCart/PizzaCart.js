import React from "react";
import PropTypes from "prop-types";
import PizzaList from "components/PizzaList";
import AdultLineItem from "components/AdultLineItem";
import ChildrenLineItem from "components/ChildrenLineItem";
import CartTotal from "components/CartTotal";
import PizzaCartContext from "PizzaCartContext/PizzaCartContext";
import { PersonTypes, PizzaSizes } from "constants/Constants";
import { PizzaSizeMatchConfig } from "containers/PizzaCart/CartEngine";

class PizzaCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: 0,
      adult: 1, //1
      small: 0,
      medium: 1, //1
      large: 0,
      onIncrementAdult: this.onIncrementAdult,
      onDecrementAdult: this.onDecrementAdult,
      onIncrementChildren: this.onIncrementChildren,
      onDecrementChildren: this.onDecrementChildren,
      onPizzaIncrement: this.onPizzaIncrement,
      onPizzaDecrement: this.onPizzaDecrement,
      orderTotalAmount: 200 //200
    };
  }

  onIncrementAdult = () => {
    this.onPersonCountChange(PersonTypes.ADULT, 1);
  };
  onDecrementAdult = () => {
    this.onPersonCountChange(PersonTypes.ADULT, -1);
  };

  onIncrementChildren = () => {
    this.onPersonCountChange(PersonTypes.CHILDREN, 1);
  };
  onDecrementChildren = () => {
    this.onPersonCountChange(PersonTypes.CHILDREN, -1);
  };
  getPersonTypeUpdateKey = personType => {
    let personTypeStateKey = "";
    if (personType === PersonTypes.ADULT) {
      personTypeStateKey = PersonTypes.ADULT;
    } else if (personType === PersonTypes.CHILDREN) {
      personTypeStateKey = PersonTypes.CHILDREN;
    }
    return personTypeStateKey;
  };

  getPersonCountForPizzaUp = pizzaSize => {
    let { small, medium, large, adult, children } = this.state;

    if (pizzaSize === PizzaSizes.SMALL) {
      const { sizeRules } = PizzaSizeMatchConfig.SMALL;
      const [sizeRule] = sizeRules;
      children = children += sizeRule.children;

      const tgtSmallCount = small + 1;
      if (tgtSmallCount % 2 === 0) {
        medium = medium + 1;
        small = small - 1;
      } else {
        small += 1;
      }
    } else if (pizzaSize === PizzaSizes.MEDIUM) {
      const { sizeRules } = PizzaSizeMatchConfig.MEDIUM;
      const [sizeRule] = sizeRules;

      if (adult === 0 || children >= 2) {
        adult += sizeRule.adult;
      } else if (adult >= 1) {
        children += sizeRule.children;
      } else {
        adult += sizeRule.adult;
        children += sizeRule.children;
      }

      if ((medium + 1) % 2 === 0) {
        large = large + 1;
        medium = medium - 1;
      } else {
        medium += 1;
      }
      //return { adult: adult + 1 };
    } else if (pizzaSize === PizzaSizes.LARGE) {
      const { sizeRules } = PizzaSizeMatchConfig.LARGE;
      const [sizeRule1, sizeRule2, sizeRule3] = sizeRules;

      if (adult === 0 && children === 0) {
        adult += sizeRule1.adult;
        children += sizeRule1.children;
      } else if (adult >= 2) {
        children += sizeRule3.children;
      } /*if (adult === 0 || children >= 4) */ else {
        adult += sizeRule2.adult;
      }

      large += 1;
    }
    const draftCartState = {
      small,
      medium,
      large,
      adult,
      children
    };

    return {
      ...draftCartState
    };
  };

  getPersonCountForPizzaDown = pizzaSize => {
    let { small, medium, large, adult, children } = this.state;

    if (pizzaSize === PizzaSizes.SMALL) {
      const { sizeRules } = PizzaSizeMatchConfig.SMALL;
      const [sizeRule] = sizeRules;
      children = children > 0 ? (children -= sizeRule.children) : children;
      small = small > 0 ? (small -= 1) : small;
    }
    if (pizzaSize === PizzaSizes.MEDIUM) {
      const { sizeRules } = PizzaSizeMatchConfig.MEDIUM;
      const [sizeRule] = sizeRules;
      if (adult >= 1) {
        adult = adult > 0 ? (adult -= sizeRule.adult) : adult;
      } else if (children >= 2) {
        children = children > 0 ? (children -= sizeRule.children) : children;
      }
      medium = medium > 0 ? (medium -= 1) : medium;
    } else if (pizzaSize === PizzaSizes.LARGE) {
      const { sizeRules } = PizzaSizeMatchConfig.LARGE;
      const [sizeRule1, sizeRule2, sizeRule3] = sizeRules;

      //2, 1, 3
      if (adult > 0) {
        if (adult >= sizeRule2.adult) {
          adult -= sizeRule2.adult;
        } else if (adult >= sizeRule1.adult) {
          adult -= sizeRule1.adult;
        }
      }

      if (children > 0) {
        if (children >= sizeRule3.children) {
          children -= sizeRule3.children;
        } else if (children >= sizeRule1.children) {
          children -= sizeRule1.children;
        }
      }

      large -= 1;
    }
    const draftCartState = {
      small,
      medium,
      large,
      adult,
      children
    };

    return {
      ...draftCartState
    };
  };

  onPersonCountChange = (personType, count) => {
    //TODO get Pizza Count for each size based on Person Count.

    //get total count of adults and children
    //1. apply the

    // const draftDistribution = this.getDraftStateForPersonChange(personType, count);
    //TODO
    this.setState(state => ({
      [personType]: state[personType] + count
    }));
  };
  getDraftStateForPersonChange = (personType, count) => {
    //TODO get Pizza Count for each size based on Person Count.

    const { small, medium, large, adult, children } = this.state;
    const draftPersonCount = {
      small,
      medium,
      large,
      adult,
      children
    };
    draftPersonCount[personType] = draftPersonCount[personType] + count;

    return draftPersonCount;
  };

  onPizzaIncrement = pizzaSize => {
    const draftState = this.getPersonCountForPizzaUp(pizzaSize);

    this.setState({
      ...draftState,
      orderTotalAmount: this.getCartTotalAmount(draftState)
    });
  };
  onPizzaDecrement = pizzaSize => {
    const draftState = this.getPersonCountForPizzaDown(pizzaSize);

    this.setState({
      ...draftState,
      orderTotalAmount: this.getCartTotalAmount(draftState)
    });
  };

  getCartTotalAmount = draftState => {
    const { small = 0, medium = 0, large = 0 } = draftState;
    const { SMALL, MEDIUM, LARGE } = PizzaSizeMatchConfig;

    const smallPizzaCost = small * SMALL.cost;
    const mediumPizzaCost = medium * MEDIUM.cost;
    const largePizzaCost = large * LARGE.cost;
    const totalCartCost = smallPizzaCost + mediumPizzaCost + largePizzaCost;
    return totalCartCost;
  };

  render() {
    return (
      <PizzaCartContext.Provider value={this.state}>
        <PizzaCartContext.Consumer>
          {({
            adult,
            onIncrementAdult,
            onDecrementAdult,
            children,
            onIncrementChildren,
            onDecrementChildren,
            orderTotalAmount
          }) => (
            <section className="cart-content">
              <PizzaList />
              <AdultLineItem
                count={adult}
                onIncrement={onIncrementAdult}
                onDecrement={onDecrementAdult}
              />
              <ChildrenLineItem
                count={children}
                onIncrement={onIncrementChildren}
                onDecrement={onDecrementChildren}
              />
              <CartTotal value={orderTotalAmount} />
            </section>
          )}
        </PizzaCartContext.Consumer>
      </PizzaCartContext.Provider>
    );
  }
}

PizzaCart.propTypes = {
  value: PropTypes.number
};

export default PizzaCart;
