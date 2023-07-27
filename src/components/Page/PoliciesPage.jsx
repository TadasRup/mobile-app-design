import style from './PoliciesPage.module.css'
import { Link } from 'react-router-dom';

const PoliciesPage = () => {

    return (

        <div className={style.firstpage}>
        <h1 className={style.heading}>Terms of Service</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique dolor quia libero non id saepe perferendis at consequuntur excepturi incidunt iste commodi officiis ea molestiae, fugit et, provident quod?s</p>
        <Link className={style.getstartedbutton} to="/CreateAccount">Back </Link>
        </div>
)};
  
  
  
  export default PoliciesPage;