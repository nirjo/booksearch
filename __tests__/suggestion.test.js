import { Suggestion } from '../src/components/Suggestion.js';
import React from 'react';
// import { mount,configure } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import{ mount,configure }   from "enzyme";
import Enzyme    from "enzyme";
import Adapter from "enzyme-adapter-react-16";

test('Suggestion Component renders the book title ', () => {
	
  const data = { title: "Title1"};  
  const key=1;
  
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = mount(
    <Suggestion key={key} book={data} />
  );
   
  
  const title = wrapper.find('div.booktitle');
  expect(title.text()).toBe('Title1');
  
  
});