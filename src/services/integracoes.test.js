import api from './api';
import { buscaTransacoes } from './transacoes';

jest.mock('./api');
const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '08/05/2023',
    mes: 'Maio',
  },
];

const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

const mockRequisicaoErro = (retorno) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe('Requisição para API', () => {
  test('Deve retornar uma lista de transações', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockTransacao));

    const transacoes = await buscaTransacoes();
    expect(transacoes).toEqual(mockTransacao);

    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });

  test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
    api.get.mockImplementation(() => mockRequisicaoErro());

    const transacoes = await buscaTransacoes();

    expect(transacoes).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });
});
