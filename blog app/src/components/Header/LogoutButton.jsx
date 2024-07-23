import { useDispatch } from "react-redux"
import { BlogService } from "../../servicesAPPW/config"
import {logout} from "../../store/authSlice"
const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try{
            await BlogService.logout();
            dispatch(logout());
        }
        catch(e){
            console.log(e);
        }
    }
           
  return (
    <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
  )
}

export default LogoutButton