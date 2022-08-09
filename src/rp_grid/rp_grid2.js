import React from 'react'
import styled from 'styled-components'
export default function Rp_gridSpan() {
  return (
    <>
    <Container>
        <BoxCard >1</BoxCard>
        <BoxCard  className='chacolum'>2</BoxCard>
        <BoxCard >3</BoxCard>
        <BoxCard>4</BoxCard>
        <BoxCard>5</BoxCard>
        <BoxCard className='chamap'>6</BoxCard>
        <BoxCard className='all'>7</BoxCard>
        {/* <BoxCard>8</BoxCard>
        <BoxCard>9</BoxCard>
        <BoxCard>10</BoxCard>
        <BoxCard>11</BoxCard>
        <BoxCard>12</BoxCard> */}

  

    </Container>
    </>
  )
}

export const Container = styled.div`
height:100vh;
  display: grid;
  grid-column: repeat(3,1fr);

  /* grid-template-rows: repeat(4,1fr); */
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;

.chacolum{
  grid-column :2/4;
}
.chamap{
  grid-row: 3/5;
}

.all{
    grid-column :2/4;
    grid-row: 3/5;

}
`
export const BoxCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

`