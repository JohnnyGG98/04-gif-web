export const getGifs = async (categoria) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=RuLBOmXSEY5rCfTT2sEEWcHSaIC737EN&limit=10&q=${encodeURI(categoria)}`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });

  return gifs;
};