import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 252px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100vh;
    position: fixed;
    background: #f8f8f8;
    top: 0;
    left: 0;
`

const Navigation = () => {
  return (
    <StyledNav>
        <div>Navigation</div>
    </StyledNav>
  )
}

export default Navigation