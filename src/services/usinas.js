import axios from 'axios';

const usinasAPI = axios.create({ baseURL: 'http://localhost:8000/usinas' });

async function getUsinas() {
  const usinaResponse = await usinasAPI.get('/maiores/5');
  return { usinas: usinaResponse.data };
}

async function getData() {
  const dataResponse = await usinasAPI.get('/atualizacao');
  return { dataAtualizacao: dataResponse.data };
}

async function patchUsinas() {
  const response = await usinasAPI.patch('/');
  return response.data;
}

export { getUsinas, getData, patchUsinas };
