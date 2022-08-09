import React from 'react'
import styled from 'styled-components'
export default function Rp_gridSpan() {
  return (
    <>
    <Container>
        <BoxCard className='' >1</BoxCard>
        <BoxCard  className=''>2</BoxCard>
        <BoxCard className='' >3</BoxCard>
        <BoxCard  className='xxrow'>4</BoxCard>
        <BoxCard className='xxall' >5</BoxCard>
        {/* <BoxCard  >6</BoxCard>
        <BoxCard  className='' >7</BoxCard>
        <BoxCard  className='xxcol1'>8</BoxCard> */}
        {/* <BoxCard >9</BoxCard>
        <BoxCard >10</BoxCard>
        <BoxCard >11</BoxCard>
        <BoxCard >12</BoxCard> */}




  

    </Container>
    </>
  )
}

export const Container = styled.div`
height:100vh;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  /* grid-template-rows: repeat(4,1fr) ; */

  gap: 10px;
  background-color: #2196F3;
  padding: 10px;

.xxall{
  grid-row: 2 /  4;
  grid-column: 2/4;

}

.xxrow{
    grid-row: 2 /  4;


}



`
export const BoxCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

`