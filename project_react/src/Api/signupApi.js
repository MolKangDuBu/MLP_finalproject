import axios from 'axios';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const sendSignUpReq = async payload => {
  const { data } = await axios.post('/back/signUp', payload);
  await sleep(1500);
  return data;
};
