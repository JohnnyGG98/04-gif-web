import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('<GifGridItem /> | Test', () => {

  const title = 'QUEMADO';
  const urlImg = 'https://media2.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=2fb5dfc4kfivsnq5j6yv6mgyh9qyrub6r6d4y0cka02jmr2d&rid=giphy.gif';

  // vista
  const wrapper = shallow(<GifGridItem title={title} url={urlImg} />);

  test('Render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Validar que el titulo se pase correctamente. | <p>{title}</p>', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  });

  test('Evaluamos propiedades de la imange. | <img src={url} alt={title} />', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(urlImg);
    expect(img.prop('alt')).toBe(title); 
  });

  test('Evaluamos las clases. | class: animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    
    expect(div.hasClass('animate__fadeIn')).toBe(true);
    expect(className.includes('animate__fadeIn')).toBe(true);
  });

}); 