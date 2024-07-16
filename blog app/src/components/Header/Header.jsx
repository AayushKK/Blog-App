import { useSelector } from "react-redux"
import {Logo , Container, LogoutButton} from "../index.js"
import {  useNavigate } from "react-router-dom"

const Header = () => {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
      {
        name: "Home",
        url: "/",
        active: true,
      },
      {
        name: "About",
        url: "/about",
        active: false,
      },
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },

  ]
  return (
    <>
     <header className='py-3 shadow bg-orange-500'>
          <Container>
              <div className='flex justify-between items-center'>

                  <Logo width="100px" />
                  <nav>
                      <ul className='flex space-x-4'>
                          { navItems.map((item) => 
                              item.active?( 
                                <li key={item.name}>
                                              <button 
                                                  onClick= {() => navigate(item.url)} 
                                                  className='text-white hover:text-gray-200'>
                                                    {item.name}
                                                </button>
                                </li>): null )
                          }

                          {authStatus && (
                              <li>
                                  <LogoutButton />
                              </li>
                          )}
                      </ul>
                  </nav>
                  
              </div>
          </Container>

     </header>
    </>
  )
}

export default Header