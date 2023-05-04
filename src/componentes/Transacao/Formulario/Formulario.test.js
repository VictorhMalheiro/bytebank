import { render, screen } from '@testing-library/react';
import Formulario from './index';
import userEvent from '@testing-library/user-event';

describe('Deve renderizar um campo de input', () => {
  test('', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    expect(campoTexto).toBeInTheDocument();
  });

  test(' com o [type="number"]', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test(' que pode ser preenchido', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    userEvent.type(campoTexto, '50');

    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em Realizar transação', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);

  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
