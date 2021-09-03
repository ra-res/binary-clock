import React, { FC, useState } from "react";
import styled from "styled-components";

import Circles from "./Circle";

const UnitContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  place-items: center;
`;

const Hour = () => {
  return (
    <UnitContainer>
      <Circles num={2}></Circles>
      <Circles num={4}></Circles>
    </UnitContainer>
  );
};

const Minutes = () => {
  return (
    <UnitContainer>
      <Circles num={4}></Circles>
      <Circles num={4}></Circles>
    </UnitContainer>
  );
};

const Seconds = () => {
  return (
    <UnitContainer>
      <Circles num={4}></Circles>
      <Circles num={4}></Circles>
    </UnitContainer>
  );
};

const BinaryClock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const dec2bin = (dec: string) => {
    return (Number(dec) >>> 0).toString(2);
  };

  setInterval(() => setDate(new Date()), 1000);

  //   dec2bin(hour.toString().split("")[1]);

  return (
    <Wrapper>
      {/* Hour */}
      <Hour />
      {/* Minutes */}
      <Minutes />
      {/* Seconds */}
      <Seconds />
    </Wrapper>
  );
};

export default BinaryClock;
