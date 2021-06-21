const Form =() => {
    const country =[1,2,3,3,3,4,2,1]
    const countryFilter = country.reduce((acc, rec, index) => {
        return (typeof acc[rec] !== 'undefined') 
          ? { ...acc, [rec]: acc[rec] + 1 } 
          : { ...acc, [rec]: 1 }
    }, {})
    console.log(countryFilter)
    return (
        <div>Hello</div>
    )
}
export default Form