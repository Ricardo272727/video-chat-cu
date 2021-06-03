import { localStoragePrefix } from '../env';

const useLocalStorage = () => {
  const getName = (item) => localStoragePrefix + item;

  const setItem = (item, value) => localStorage.setItem(getName(item), value);
  const getItem = (item) => localStorage.getItem(getName(item));
  const removeItem = (item) => localStorage.removeItem(getName(item));
  
  return { setItem, removeItem, getItem };
};

export default useLocalStorage;
