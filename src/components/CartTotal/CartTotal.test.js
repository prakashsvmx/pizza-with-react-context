import React from "react";
import Enzyme, { shallow } from "enzyme";
import CartTotal from "./CartTotal";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<CartTotal {...props} />);
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
    const wrapper = setUp({ value: 0 });

    const rootElement = findByTestAttr(wrapper, "cart-total");
    expect(rootElement.length).toBe(1);
  });

  it("render the valid value", () => {
    const wrapper = setUp({ value: 300 });

    const validText = findByTestAttr(wrapper, "cart-total-valid");
    expect(validText.length).toBe(1);

    const invalidText = findByTestAttr(wrapper, "cart-total-invalid");
    expect(invalidText.length).toBe(0);
  });

  it("render the non valid min", () => {
    const wrapper = setUp({ value: 150 });

    const validText = findByTestAttr(wrapper, "cart-total-valid");
    expect(validText.length).toBe(0);

    const invalidText = findByTestAttr(wrapper, "cart-total-invalid");
    expect(invalidText.length).toBe(1);
  });

  it("render the non valid max", () => {
    const wrapper = setUp({ value: 1500 });

    const validText = findByTestAttr(wrapper, "cart-total-valid");
    expect(validText.length).toBe(0);

    const invalidText = findByTestAttr(wrapper, "cart-total-invalid");
    expect(invalidText.length).toBe(1);
  });
});
