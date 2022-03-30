import axios from 'axios';

export const getLocationAutoComplete = async userInput => {
  console.log(userInput);
  const { data } = await axios.get(`/back/autocomplete/json/${userInput}`);
  return Object.values(data);
};
