const RenderCountry = (props) => {
    console.log(props)
    return    props.country.map(({name,flag,capital,population,languages,id}) => {
          return  <div key={id} className="country-container">

             <div className="country-flag"> <img src={flag} alt="country_image"></img></div>
             
            <div className='country-name'> {name}</div>
           { capital!==""?<div>Capital: {capital}</div>:''}
            <div>Language{languages.length>1?'s':' '}: {languages.map(({name},i)=>(i===languages.length-1)?name: name +', ')} </div>
            
            <div>Populations: {population.toLocaleString()}</div>
            </div>
        })
}
export default RenderCountry