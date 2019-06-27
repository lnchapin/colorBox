import React from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'

const ColoredCol = styled(Col)`
  height: 160px;
  background-color: ${props => props.color};
`

const Box = props => {
  return(
    <>
      <ColoredCol sm={12} md={6} lg={2} onClick={()=>props.handleClick(props.id, props.color)} color={props.color}></ColoredCol>
    </>
  )
}

export default Box;
