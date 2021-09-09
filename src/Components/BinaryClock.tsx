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

interface IBinaryTime {
  first: string;
  second: string;
}

interface ITimeUnit {
  binary: IBinaryTime;
  dimension: number[];
}

const TimeUnit = ({ binary, dimension }: ITimeUnit) => {
  return (
    <UnitContainer>
      <Circles binary={binary.first} num={dimension[0]}></Circles>
      <Circles binary={binary.second} num={dimension[1]}></Circles>
    </UnitContainer>
  );
};

const BinaryClock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const dec2bin = (dec: string) => {
    return (Number(dec) >>> 0).toString(2);
  };

  const hour = {
    first: dec2bin(date.getHours().toString().split("")[0]),
    second: dec2bin(date.getHours().toString().split("")[1]),
  };

  const minutes = {
    first: dec2bin(date.getMinutes().toString().split("")[0]),
    second: dec2bin(date.getMinutes().toString().split("")[1]),
  };

  const seconds = {
    first: dec2bin(date.getSeconds().toString().split("")[0]),
    second: dec2bin(date.getSeconds().toString().split("")[1]),
  };

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <Wrapper>
      {/* Hour */}
      <TimeUnit binary={hour!} dimension={[2, 4]} />
      {/* Minutes */}
      <TimeUnit binary={minutes!} dimension={[4, 4]} />
      {/* Seconds */}
      <TimeUnit binary={seconds!} dimension={[4, 4]} />
    </Wrapper>
  );
};

export default BinaryClock;
