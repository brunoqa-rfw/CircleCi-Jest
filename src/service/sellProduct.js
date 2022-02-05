/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançada
 * --> Valor de venda não pode ser maior do que o valor de compras
 * @param {*} product 
 * @param {*} amount 
 */

export default function sellProduct(product, amount){
    product.stok -= amount;
    return product;
}
