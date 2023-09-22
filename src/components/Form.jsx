import React from 'react'
import styled from '@emotion/styled'
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

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {

    const [SelectCoins] = useSelectCoin('Choose your currency', coins);


  return (
    <form>

      <SelectCoins /> 

      <InputSubmit 
        type="submit" 
        value='quote' />
    </form>
  )
}

export default Form
