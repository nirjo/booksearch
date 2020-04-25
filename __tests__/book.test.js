import { Book } from '../src/components/book.js';
import React from 'react';
// import { mount,configure } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import{ mount,configure }   from "enzyme";
import Enzyme    from "enzyme";
import Adapter from "enzyme-adapter-react-16";

test('Book Component renders the title, summary and author', () => {
	
  const data = { id: 1,key:1, title: "Title1", summary: 'Summary1', author: 'Author1' };  
  const index=1;
  
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = mount(
    <Book index={index} book={data}  key={data.key}/>
  );
   
  
  const title = wrapper.find('div.item p.title');
  expect(title.text()).toBe('Title1');
  
   const summary = wrapper.find('div.item p.summary_text');
  expect(summary.text()).toBe('Summary1');
  
   const author = wrapper.find('div.item p.author_text');   
  expect(author.text()).toBe('Author1');
});