import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifApp from '../GifApp';

describe('<GifApp /> | Main aplication', () => {
  
  test('Render', () => {
    const wrapper = shallow( <GifApp /> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('Revisamos si se renderiza uno ', () => {
    const wrapper = shallow( <GifApp /> );

    expect( wrapper.find('GifGrid').length ).toBe(1);
  });
  

});
