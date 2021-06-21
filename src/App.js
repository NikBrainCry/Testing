import React from 'react';
import MouseEnter from './MouseEnter'


import Lists from './Lists';
import Header from './Header';

// Population diagram
const tenHighestPopulation = [
  { name: 'World', population: 7693165599 },
  { name: 'China', population: 1377422166 },
  { name: 'India', population: 1295210000 },
  { name: 'USA', population: 323947000 },
  { name: 'Indonesia', population: 258705000 },
  { name: 'Brazil', population: 206135893 },
  { name: 'Pakistan', population: 194125062 },
  { name: 'Nigeria', population: 186988000 },
  { name: 'Bangladesh', population: 161006790 },
  { name: 'Russia', population: 146599183 },
  { name: 'Japan', population: 126960000 },
]
// Number list 
let count =0
const NumberArray = Array(32).fill(31).map(item=>item-count++).reverse()
const isPrime = (num) => {
  if (num <= 1) return false; // negatives
  if (num % 2 === 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
const NumberList = () => {

  
    return ( 

        <div >{NumberArray.map(item=>isPrime(item)?<div key={item} className='primeNumberList'>{item}</div>:<div key={item} className='numberList'>{item}</div>)}</div>

    
  )

  
}
class App extends React.Component  {
  constructor (props) {
    super(props)
    this.state= {
      bgStyle:('url(https://klv-oboi.ru/img/gallery/56/thumbs/thumb_l_25289.jpg)'),
      color:'black',
      top:400,
      left:200
    }
  }
  handleClick =() => {
    
 this.state.bgStyle==='url(https://klv-oboi.ru/img/gallery/56/thumbs/thumb_l_25289.jpg)'? this.setState({
      bgStyle:'url(https://w-dog.ru/wallpapers/15/16/350003187882941.jpg)',color:'white'
    }):this.setState({
      bgStyle:'url(https://klv-oboi.ru/img/gallery/56/thumbs/thumb_l_25289.jpg)',color:'black'
    })
    
  }
    handleMouseEnter =(e) =>{
    this.setState ({
      top:Math.random()*1000,
      left:Math.random()*1000
    })
}
componentDidMount () {
  document.body.style.background=(this.state.bgStyle)
}
componentDidUpdate () {
  document.body.style.background=(this.state.bgStyle)
}

  render() {

  return (  
    
    <div>
   
    
    <Header />
    <div style={{textAlign:'center',color:this.state.color}}>
      <h1>World population</h1>
      <h6>Ten most population countries</h6>
      
      <Lists data={tenHighestPopulation} ></Lists>
    </div>
    <div className='numberLists'><NumberList  /></div>
    <button style={{width:100,height:100}} onClick={this.handleClick}>Поменять фон</button>
    <MouseEnter onMouseEnter={this.handleMouseEnter} top={this.state.top} left={this.state.left} />  

</div>
  )


  }


}
export default App
