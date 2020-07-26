import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('<AddCategory /> | Pruebas', () => {

  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategoria={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategoria={setCategory} />);
  });

  test('Render', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Evaluar input', () => {
    const input = wrapper.find('input');
    const val = 'Hola mundo';

    input.simulate('change', { target: { value: val } });
    // expect(input.text).toBe(val);
    // expect(input.prop('value')).toBe(val);
  });

  test('Evaluar el no envio del submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategory ).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategory y el limpiar el input', () => {
    const val = 'hunter';

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: val } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategory ).toHaveBeenCalled();
    expect( setCategory ).toHaveBeenCalledTimes(1);
    expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) );

    expect(input.prop('value')).toBe('');
  });

});