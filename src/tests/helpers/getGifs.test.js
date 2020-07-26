import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Probamos el api', () => {

  test('Debe devolver 10 elementos', async () => {
    const gifs = await getGifs('One punch');

    expect( gifs.length ).toBe(10);
  });


  test('Debe devolver 0 elementos', async () => {
    const gifs = await getGifs('');

    expect( gifs.length ).toBe(0);
  });

});