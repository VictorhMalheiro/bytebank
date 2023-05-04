import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deverá renderizar um link para a pagina inicial', () => {
  render(<Menu />);

  const linkPaginaInicial = screen.getByText('Inicial');

  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deverá renderizar uma lista de links', () => {
  render(<Menu />);

  const listaLinks = screen.getAllByRole('link');

  expect(listaLinks).toHaveLength(4);
});

test('Não deverá renderizar o link para Extrato', () => {
  render(<Menu />);

  const linkExtrato = screen.queryByText('Extrato');

  expect(linkExtrato).not.toBeInTheDocument();
});

test('Devera renderizar uma lista de links com a classe link', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));

  expect(links).toMatchSnapshot();
});
