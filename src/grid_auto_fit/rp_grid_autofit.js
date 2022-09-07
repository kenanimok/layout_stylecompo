import React from "react";
import styled from "styled-components";
export default function Rp_grid_autofit() {
  return (
    <>
      <Container>
        {/* <BoxCard className="groub">1</BoxCard>       */}
        <BoxCard>1</BoxCard>
        <BoxCard>2</BoxCard>
        <BoxCard>3</BoxCard>
        <BoxCard>4</BoxCard>
        <BoxCard>5</BoxCard>
        <BoxCard>6</BoxCard>
        <BoxCard>7</BoxCard>
        <BoxCard>8</BoxCard>
        <BoxCard>9</BoxCard>
        <BoxCard>10</BoxCard>
        <BoxCard>11</BoxCard>
        <BoxCard>12</BoxCard>
      </Container>
    </>
  );
}

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #2196f3;
  padding: 10px;

  .groub {
    grid-column: 1/6;
  }
`;

export const BoxCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px;
  font-size: 30px;
  border: 5px solid #fff;
`;
