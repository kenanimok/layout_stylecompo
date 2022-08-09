import React from 'react'
import styled from 'styled-components'
export default function Rp_grid1() {
  return (
    <>
    <Container>
        <BoxCard className='header'>header</BoxCard>
        <BoxCard className='main' >side</BoxCard>
        <BoxCard className='footter'  >footter</BoxCard>

    </Container>
    </>
  )
}

export const Container = styled.div`
 height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr ;
  grid-template-rows: 1fr 5fr 1fr;

  background-color: #2196F3;

  .header{
    grid-column:1 / span 3;
  }

  .main{
    grid-column : 1 / span 3; 
  }

 .footter{
    grid-column: 1 /span 3;
 }
`
export const BoxCard = styled.div`
 background-color: rgba(255, 255, 255, 0.8);
 border: solid black;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

`