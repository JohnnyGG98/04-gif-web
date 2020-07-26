import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas | <GifGrid />', () => {

  const cat = 'Hunter';

  test('Render ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow( <GifGrid categoria={cat} /> ) 
    expect(wrapper).toMatchSnapshot();
  });

  test('Return informarcion', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://',
        title: 'TITLE'
      }
    ];
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow( <GifGrid categoria={cat} /> ) 

    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });

});