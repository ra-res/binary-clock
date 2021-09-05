import React from "react";
import styled from "styled-components";

interface CircleProps {
  active: boolean;
  opacity: number;
}

const Circle = styled.div<CircleProps>`
  height: 50px;
  width: 50px;
  margin: 15px;
  border-radius: 25px;
  opacity: ${(prop) => prop.opacity};
  background: ${(prop) => (prop.active ? "green " : "gray")};

  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
    margin: 5px;
    border-radius: 12.5px;
  }
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
    bin = Array(4).fill("0").concat(bin).slice(bin.length);
  }

  for (let index = 0; index < 4; index++) {
    circles.push(
      <Circle
        active={bin[index] === "1"}
        opacity={num !== 4 && index < num ? 0 : 1}
      />
    );
  }

  return <Container>{circles}</Container>;
};

export default Circles;
