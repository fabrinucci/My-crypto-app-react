import styled from "@emotion/styled"
import { useState } from "react"

const useCrypto = ( label, initialState, options ) => {

  const [state, setState] = useState(initialState)

  const SelectCrypto = () => (
    <>
      <Label>{ label }</Label>
      <Select
        onChange={ e => setState(e.target.value) }
        value={ state }
      >
        <option disabled="true" value="">- Seleccione -</option>
        {
          options.map( option => (
            <option key={ option.CoinInfo.Id } value={ option.CoinInfo.Name }>{ option.CoinInfo.FullName }</option>
          ))
        }
      </Select>
    </>
    )

  return [
    state,
    SelectCrypto,
  ]
}

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

export default useCrypto;