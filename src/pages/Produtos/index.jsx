import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {

    const[dados, setDados] = useState([]);

    const pagePizzas = () => {

        await axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto",
            {withCredentials: true}
        )
        .then((response) => setDados(response.data))
        .catch((error) => console.log(error))

    }
    useEffect(()=>{
        pagesPizzas();
    }, [])

    useEffect(() =>{
        console.log(dados)
    }, [dados])

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