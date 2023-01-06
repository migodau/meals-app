import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {

  const [favIds, setFavIds] = useState([]);

  const addFavorite = (id) => setFavIds(current => [ ...current, id ]);
  const removeFavorite = (id) => setFavIds(current => current.filter(item => item !== id) );
  
  const value = {
    ids: favIds,
    addFavorite,
    removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>
    { children }
  </FavoritesContext.Provider>
}

export default FavoritesContextProvider;