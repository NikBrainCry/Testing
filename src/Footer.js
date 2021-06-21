import { BsCapslock } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
const Footer =() => {
    return <div id="footer" className="footer-container">
        <h1>Copyright ©2021</h1>

        <h4>Designed and Built by Nik Jones</h4>
        <div ><HashLink to="#"> <BsCapslock className='i-nav'/></HashLink></div>
    </div>
}
export default Footer