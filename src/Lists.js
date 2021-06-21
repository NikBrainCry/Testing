
 const Country = ({data:{name,population}})=> {

    return (
      <div key={population/1000} className="list">
        <li key={population*10}><div key={population/10} style={{width:120,textAlign:'start',marginLeft:10}}>{name==='United States of America'?'USA':name==='Russian Federation'?'Russia':name}</div> <div key={population/30} style={{width:800, textAlign:'start'}}><div key={population/100} style={{display:'inline-block',backgroundColor:'blue', height:'2rem', width:population/10000000}}></div></div><div>{population.toLocaleString('en-US')}</div>  </li>
  
      </div>
    ) 
  }
  const Lists = (props)=> {

    const CountryList = props.data.map((item)=><Country key={item.length} data={item} />)
    return   <div key={Math.random()*1000} className='mainList' > {props.sum ? <div className="list"> <li key={2} ><div style={{width:120,textAlign:'start',marginLeft:10}}>World</div> <div style={{width:800, textAlign:'start'}}><div style={{display:'inline-block',backgroundColor:'blue', height:'2rem', width:props.sum/10000000}}></div></div><div>{props.sum.toLocaleString('en-US')}</div>  </li></div>:''}  {CountryList}</div>
  }
  export default Lists