import axios from 'axios';
import { fetch } from '../src';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('mock test', async () => {
  mockedAxios.get.mockResolvedValueOnce('hello');
  await fetch().then(response => {
    console.log(response);
  });
});
