import React from "react";
import App from "./App";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
//Test the behaviour not the implementation
//Find Balance b/w Unit and integration testing.
//No Snapshot testing.
//
//it or test can be used.
//Test suite must contain atleast one test.
/*test('renders without crashing', () => {
 const wrapper = shallow(<App/>);
 expect(wrapper).toBeTruthy();
 // console.log(wrapper.debug())
});*/

test("Renders without error", () => {});

test("Renders increment button", () => {});

test("Renders Counter display", () => {});

test("Renders Counter at 0", () => {});

test("Clicking button increments Counter display", () => {});
