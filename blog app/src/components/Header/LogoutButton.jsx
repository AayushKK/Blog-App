import { useDispatch } from "react-redux"
import authService from "../../servicesAPPW/auth"
import { logout } from "../../store/authSlice";
const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try{
            await authService.logout();
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