import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import image from '.././cryptomonedas.png'
import Financial from "./Financial"
import Form from "./Form"
import Spinner from "./Spinner"

const Home = () => {

  const [currency, saveCurrency] = useState('');
  const [crypto, saveCrypto] = useState('');

  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    
    const cryptoFinancial = async () => {
      if( currency === '' ) return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ crypto }&tsyms=${ currency }`

      const result = await axios.get(url)
      setLoading(true);

      setTimeout( () => {
        setLoading(false)

        setResult(result.data.DISPLAY[crypto][currency]);

      }, 3000)

    }

    cryptoFinancial()
    
  }, [currency, crypto])

  return (
    <Container>
      <div>
        <Image
          src={ image } 
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>

        <Form 
          saveCurrency={ saveCurrency }
          saveCrypto={ saveCrypto }
        />

        { loading ? <Spinner /> : <Financial result={ result } /> }

      </div>


    </Container>
  )
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 50px;
  margin-top: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`
export default Home