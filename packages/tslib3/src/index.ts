import axios from 'axios';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const fetch = async () => {
  return axios.get('https://api.syosetu.com/rank/rankget/?rtype=20130501-m');
};
