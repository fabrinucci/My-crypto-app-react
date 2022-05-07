import styled from "@emotion/styled";

const Financial = ({ result }) => {

  if( Object.keys(result).length === 0 ) return null;
  console.log(result);

  return (
    <Result>
      <Price>Precio actual: <span>{ result.PRICE }</span></Price>
      <Info>Precio más alto del día: <span>{ result.HIGHDAY }</span></Info>
      <Info>Precio más bajo del día: <span>{ result.LOWDAY }</span></Info>
      <Info>Variación en las últimas 24 hs: <span>{ result.CHANGEPCT24HOUR }%</span></Info>
      <Info>Última Actualización: <span>{ result.LASTUPDATE }</span></Info>
    </Result>
  )
}

const Result = styled.div`
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Price = styled.p`
  font-size: 30px;
`

const Info = styled.p`
  font-size: 18px;
  .span {
    font-weight: bold;
  }
`

export default Financial