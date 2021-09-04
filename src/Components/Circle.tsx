import React, { useState } from "react";
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
  binary: string;
}

const Circles = ({ num, binary }: CirclesProps) => {
  const circles = [];
  let bin = binary.split("");

  // Pad Array with 0s
  if (bin.length !== num) {
    bin = Array(num).fill("0").concat(bin).slice(bin.length);
  }

  for (let index = 0; index < num; index++) {
    circles.push(<Circle active={bin[index] === "1"} />);
  }

  return <Container>{circles}</Container>;
};

export default Circles;
