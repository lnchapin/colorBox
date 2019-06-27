import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Box from './Box'

class BoxContainer extends Component{
  static defaultProps={
    colorOptions: ['#E8F8F5', '#D1F2EB','#A3E4D7', '#76D7C4', '#48C9B0', '#1ABC9C', '#17A589', '#148F77', '#117864', '#0E6251', '#A2D9CE', '#73C6B6', '#45B39D', '#16A085', '#138D75', '#117A65', '#0E6655', '#0B5345']
  }
  state={
    boxes: [
      {id: 1, color: `#E8F8F5`},
      {id: 2, color: '#D1F2EB'},
      {id: 3, color: '#A3E4D7'},
      {id: 11, color: '#A2D9CE'},
      {id: 12, color: '#73C6B6'},
      {id: 5, color: '#48C9B0'},
      {id: 4, color: '#76D7C4'},
      {id: 6, color: '#1ABC9C'},
      {id: 13, color: '#45B39D'},
      {id: 7, color: '#17A589'},
      {id: 14, color: '#16A085'},
      {id: 15, color: '#138D75'},
      {id: 8, color: '#148F77'},
      {id: 16, color: '#117A65'},
      {id: 9, color: '#117864'},
      {id: 17, color: '#0E6655'},
      {id: 10, color: '#0E6251'},
      {id: 18, color: '#0B5345'}]
  }

  handleClick = (boxId, boxColor) =>{
    var colorIndex = Math.floor(Math.random() * this.props.colorOptions.length)
    if (this.props.colorOptions[colorIndex]===boxColor) {
      colorIndex = Math.floor(Math.random() * this.props.colorOptions.length)
    }
    console.log('colorBox', boxColor);
    console.log('newColor', this.props.colorOptions[colorIndex]);
    const newBox = this.state.boxes.map(box => {
      if (box.id == boxId) {
        return{...box, color: this.props.colorOptions[colorIndex]};
      }
      return box
    })
    this.setState({ boxes:newBox })
  }

  render(){
    return(
      <Container>
        <Row>
          {this.state.boxes.map(color=><Box id={color.id} key={color.id} color={color.color} handleClick={this.handleClick} />)}
        </Row>
      </Container>
    )
  }
}


export default BoxContainer;

// we need 18 boxes that change color on click what needs to go in state maybe an object with key of id and value color. id could act as a key for a map. Then pass and id color to the click function.
//in props: color options
