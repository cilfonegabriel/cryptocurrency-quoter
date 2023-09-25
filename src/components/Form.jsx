import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error.jsx'
import useSelectCoin from '../hooks/useSelectCoin.jsx'
import { coins } from '../data/coins.js'

const InputSubmit = styled.input `
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-bottom: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)


    const [coin, SelectCoins] = useSelectCoin('Choose your currency', coins);
    const [criptoCurrency, SelectCriptoCurrency] = useSelectCoin('Choose your cripto currency', criptos);

    

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const response = await fetch(url)
            const result = await response.json()

            const arrayCriptos = result.Data.map(cripto => {
                const object = {
                    id: cripto.CoinInfo.Name,
                    name:cripto.CoinInfo.FullName
                }
                return object;
            })

            setCriptos(arrayCriptos)
        }
        consultAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if([coin, criptoCurrency].includes('')) {
            setError(true)
            return
        }
        setError(false)
    }

  return (
    <>
        {error && <Error>All fields are required</Error>}
        
        <form
            onSubmit={handleSubmit}
        >

        <SelectCoins /> 
        <SelectCriptoCurrency /> 

        <InputSubmit 
            type="submit" 
            value='quote' />
        </form>
    </>

  )
}

export default Form
