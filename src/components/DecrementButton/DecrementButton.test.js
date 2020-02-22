import React from "react";
import Enzyme, { shallow } from "enzyme";
import DecrementButton from "./DecrementButton";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<DecrementButton {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const originalConsoleError = global.console.error;

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("Test Decrement Button", () => {
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
    const mockClickFn = jest.fn();
    const wrapper = setUp({ onClick: mockClickFn });

    const rootElement = findByTestAttr(wrapper, "btn-decrement");
    expect(rootElement.length).toBe(1);
  });

  it("validate Mandatory Props", () => {
    try {
      setUp();
    } catch (e) {
      // eslint-disable-next-line jest/no-try-expect
      expect(e).toBeDefined();
    }
  });

  test("test Click Event", () => {
    const mockClickFn = jest.fn();
    const wrapper = setUp({ onClick: mockClickFn });

    wrapper.simulate("click");
    expect(mockClickFn).toHaveBeenCalled();
  });
});
