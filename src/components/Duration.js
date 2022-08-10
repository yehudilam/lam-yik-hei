import * as React from 'react';
import styled from "styled-components";

const DurationText = styled.p`
  flex: 0 1 100px;
  text-align: right;
  color: rgb(75 85 99);
  min-width: ${({ minWidth }) => minWidth};
`;

const Duration = ({
  from, to, minWidth
                  }) => {
  return (
    <DurationText minWidth={minWidth}>{from} - {to}</DurationText>
  )
};

export default Duration;
