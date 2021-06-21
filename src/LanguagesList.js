


const LanguagesList = (props) => {
    const LanguageList = Object.entries(props.data).map(([key,values])=><Languages data={[key,values]} />)
    return <div className='mainList' > {LanguageList}</div>
  }


const Languages = ({data:[key,values]})=> {

    return (
      <div className="list">
        <li key={values}><div style={{width:120,textAlign:'start',marginLeft:10}}>{key}</div> <div style={{width:800, textAlign:'start'}}><div style={{display:'inline-block',backgroundColor:'blue', height:20, width:values*8}}></div></div><div>{values.toLocaleString('en-US')}</div>  </li>
  
      </div>
    ) 
  }



export default LanguagesList