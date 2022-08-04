import React from 'react'
import styled from 'styled-components'
export default function Grid_fr() {
  return (
    <>
    <Container>
        <BoxCard></BoxCard>
        <BoxCard>herder</BoxCard>
        <BoxCard></BoxCard>

        <BoxCard className='side'>side</BoxCard>
        <BoxCard className='main'>main</BoxCard>
  

        <BoxCard className='footer' >footer</BoxCard>
        {/* <BoxCard>werwerwer</BoxCard> */}
        {/* <BoxCard>ewrwerwer</BoxCard> */}
  
  
    </Container>
    </>
  )
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 1fr 5fr 1fr;

  background-color: #2196F3;

  .side {
  grid-row: 2/span 3
}

.footer {
    grid-column: 2 /span 2;
}

.main{
    grid-column: 2 /span 2;

}
`
export const BoxCard = styled.div`
 background-color: rgba(255, 255, 255, 0.8);
 border: solid black;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

`