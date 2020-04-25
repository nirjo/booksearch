import { Autocomplete } from '../src/components/autocomplete.js';
import React from 'react';

import{ mount,configure }   from "enzyme";
import Enzyme    from "enzyme";
import Adapter from "enzyme-adapter-react-16";

test('Autocomplete Component renders A textbox', () => {
	
  const data = [
					{ id: 1,key:1, title: "Title1", summary: 'Summary1', author: 'Author1' },  
					{ id: 2,key:2, title: "Title2", summary: 'Summary2', author: 'Author2' },  
					{ id: 3,key:3, title: "Title3", summary: 'Summary3', author: 'Author3' }
				];
	

  
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = mount(
    <Autocomplete books={data} addSelectedBook={(selectedBook)=>{}}/>
  );
  
 
  expect(wrapper.find('div.autocomplete').length).toBe(1);
  
});