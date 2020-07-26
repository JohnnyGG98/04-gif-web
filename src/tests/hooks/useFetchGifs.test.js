import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hooks | useFetchGifs', () => {

  test('Lo que nos retorna por defecto', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One puch') );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  test('Data cargada', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One puch') );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe(10);
    expect( loading ).toBe(false);
  });
  
});
