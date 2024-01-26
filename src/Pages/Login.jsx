import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import '../Styles/Login.css'
function Login() {

  return (
    <div className="loginBackground">
      <Link to='/Chat'><Button className="loginBtn" variant="info">Login</Button>{' '}</Link>
    </div>
  )
}

export default Login;