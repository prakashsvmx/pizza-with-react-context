import React from "react";
import Enzyme, { shallow } from "enzyme";
import AdultLineItem from "./AdultLineItem";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<AdultLineItem {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const originalConsoleError = global.console.error;

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("Test Increment Button", () => {
  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Failed prop type/, /Warning: Received/];

      if (propTypeFailures.some(p => p.test(args[0]))) {
        throw new Error(args[0]);
      }

      originalConsoleError(...args);
    };
  });

  it("renders without error", () => {
    const wrapper = setUp({ onIncrement: jest.fn(), onDecrement: jest.fn() });

    const rootElement = findByTestAttr(wrapper, "adult-line-item");
    expect(rootElement.length).toBe(1);
  });
});
