import React,{useEffect, useState} from 'react'
import jwt_decode from "jwt-decode "

const Login = () => {
  const [User, setUser] = useState({})
  
  function handleCallbackResponse(res){
    console.log(res.credential)
    var obj = jwt_decode(res.credential);
    console.log(obj);
    setUser(obj)
    document.getElementById("signin").hidden=true
    document.getElementById("wrapper").hidden=false
  }

  useEffect(() => {
    document.getElementById("wrapper").hidden=true
    /* global google */
    
    google.accounts.id.initialize({
      client_id:"69802119849-apbffu4ilhu3b9nogukhlg0m71mtaspi.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signin"),
      {
        theme:"outline",
        size:"large"
      }
    )
  }, [])
  
  return (
    <div>
      <div id="signin"></div>
      <div id="wrapper">Hii {User.name} you are signed in</div>
    </div>
  )
}

export default Login