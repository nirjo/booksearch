import { BooksList } from '../src/components/booksList.js';
import React from 'react';

import{ mount,configure }   from "enzyme";
import Enzyme    from "enzyme";
import Adapter from "enzyme-adapter-react-16";

test('BooksList Component renders Multiple Book Component', () => {
	
  const data = [
					{ id: 1,key:1, title: "Title1", summary: 'Summary1', author: 'Author1' },  
					{ id: 2,key:2, title: "Title2", summary: 'Summary2', author: 'Author2' },  
					{ id: 3,key:3, title: "Title3", summary: 'Summary3', author: 'Author3' }
				];

  
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = mount(
    <BooksList books={data} />
  );
  
 
   expect(wrapper.find('div.booklist').children().length).toBe(3);
  
});