import axios from 'axios';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const sendLoginReq = async payload => {
  const { data } = await axios.post('/back/signIn', payload);
  await sleep(1500);
  return data;
};
