import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'


const Container = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 ;
  }
`

function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  const [load, setLoad] = useState(false)


  useEffect(() => {
    if(Object.keys(coins).length > 0) {

      const quoteCripto = async () => {

        setLoad(true)
        setResult({})

        const  {coin, criptoCurrency } = coins

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${coin}`

        const resp = await fetch(url)
        const result = await resp.json()

       setResult(result.DISPLAY[criptoCurrency][coin])
       setLoad(false)
      }

      quoteCripto()
    }

  },[coins])
 
  return (
    <Container>
      <Imagen
        src={ImagenCripto}
        alt='imagenes criptomoedas'
      />

      <div>
        <Heading>Quote Cryptocurrencies Instantly</Heading>
        <Form
          setCoins = {setCoins}
        />
        {load && <Spinner />}
        { result.PRICE && <Result result={result}/> } 

      </div>
    </Container>
  )
}

export default App
