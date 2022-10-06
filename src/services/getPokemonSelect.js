export const getPokemonSelect = async (url, name) => {
    const resp = await fetch(`${url}/${name}`);
    const data = await resp.json();
    return data;
    
  };