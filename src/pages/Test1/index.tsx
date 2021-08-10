import React from 'react'
// import AppbodyDeDa from '../AppbodyDeDa'
import styled from 'styled-components'
export const BodyWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
`

export default function Test() {
  return (  
    <BodyWrapper>
     sss
    </BodyWrapper>
  )
}
