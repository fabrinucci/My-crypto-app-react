import styled from "@emotion/styled/"

const Error = ({ message }) => {
  return (
    <ErrorMSG>
      { message }
    </ErrorMSG>
  )
}

const ErrorMSG = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #F32424;
  padding: 1rem;
  border-radius: 10px;
`

export default Error