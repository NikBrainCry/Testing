


const  MouseEnter =(props) => {

   return <div className='epileptic' onMouseEnter={props.onMouseEnter} style={{top:props.top,left:props.left,height:150,border:'1px solid black', background:"#0042A2",fontSize:24,color:'white',position:'absolute'}}>
            Ведьмаку заплатите,чеканной монетой
    </div>
}
export default MouseEnter
