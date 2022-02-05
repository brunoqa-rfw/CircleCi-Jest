// A quantidade vendida pode ser de 1 ou mais unidades

import Product from '../src/model/Jest '
import sell from '../src/service/sellProduct'

test('Deve validar baixa de estoque da venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    sell(produto, 1);
    expect(produto.stok).toBe(9);
})

test('Deve aceitar a venda de mais do que uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    sell(produto, 3);
    expect(produto.stok).toBe(7);
})