import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import useCrypto from "../hooks/useCrypto"
import useCurrency from "../hooks/useCurrency"
import Error from "./Error"

const Form = ({ saveCurrency, saveCrypto }) => {

  const [listCrypto, saveCryptocurrencies] = useState([])
  const [error, setError] = useState(false)
  
  const CURRENCIES = [
    {code: 'USD', name: 'Dólar Americano'},
    {code: 'EUR', name: 'Euro'},
    {code: 'GBP', name: 'Libra Esterlina'},
    {code: 'BRL', name: 'Real Brasileño'},
    {code: 'ARS', name: 'Peso Argentino'},
    {code: 'MXN', name: 'Peso Mexicano'},
    {code: 'AUD', name: 'Dólar Australiano'},
    {code: 'CHF', name: 'Franco Suizo'},
    {code: 'RUB', name: 'Rublo'},
    {code: 'JPY', name: 'Yen'},
    {code: 'CNY', name: 'Yuan'},
    {code: 'KRW', name: 'Won'},
  ]   

  const [currency, SelectCurrency] = useCurrency('Elige tu Moneda', '', CURRENCIES );

  const [crypto, SelectCrypto] = useCrypto('Elige tu Criptomoneda', '', listCrypto );

  useEffect( () => {
    const consultApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await axios.get(url)
      saveCryptocurrencies(result.data.Data); 
    }
    consultApi();
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    if( currency === '' || crypto === '' ) {
      setError(true)
      return;
    }
    
    setError(false)
    
    saveCurrency(currency)
    saveCrypto(crypto)
  }

  return (
    <form onSubmit={ handleSubmit }>  

      {
        error ? <Error message='Todos los campos son obligatorios' /> : null
      }

      <SelectCurrency />  
      <SelectCrypto />
      <Button
        type="submit"
        value="calculate"
      >
        Cotizar
      </Button>    
      
    </form>
  )
}

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  background-color: #66a2fe;
  border: none;
  border-radius: 10px;
  color: $fff;
  text-transform: uppercase;
  transition: all .3s ease-in;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`

export default Form