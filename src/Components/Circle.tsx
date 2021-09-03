import React from "react";
import styled from "styled-components";

interface CircleProps {
  active: boolean;
}

const Circle = styled.div<CircleProps>`
  height: 50px;
  width: 50px;
  margin: 15px;
  border-radius: 25px;
  background: ${(prop) => (prop.active ? "green " : "gray")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface CirclesProps {
  num: number;
}

const Circles = ({ num }: CirclesProps) => {
  const circles = [];

  for (let index = 0; index < num; index++) {
    circles.push(<Circle active={false} />);
  }

  return <Container>{circles}</Container>;
};

export default Circles;
