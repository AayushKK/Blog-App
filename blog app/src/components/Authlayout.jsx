import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Authlayout({children , authentication=true}) {

    const navigate = useNavigate()
    const authStatus = useSelector((state)=>state.auth.status )
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
            let authValue = authStatus === true? true: false

            if (authentication && authValue)
             { navigate("/login")
               
             }else if (!authentication && !authValue)
              {
                navigate("/")
             }
              setLoader(false)

    }
    ,[authStatus,authentication, navigate]
    )



  return loader? <div>Loading..</div> : <div> {children}</div>

}

