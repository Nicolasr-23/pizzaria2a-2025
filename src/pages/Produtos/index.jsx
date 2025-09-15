const Produtos = () => {
    // Obejeto de produtos da lista
    const pizza = [
        'Pizza de Muçarela',
        'Pizza de Calabresa', 
        'Pizza Baina', 
        'Pizza Portuguesa'
    ]
    //Iteração da lista de pizzas
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return(
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}