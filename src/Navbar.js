import { Link } from "react-router-dom";
function Navbar(props) {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    {props.title}

  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className = "nav-link" to = "/Home">Home</Link>
        {props.home}
      </li>
      <li className="nav-item">
        <Link className = "nav-link" to = "/Card">Card</Link>
        {props.card}
      </li>
      <li className="nav-item">
        <Link className = "nav-link" to = "/Contact">Contact</Link>
        {props.contact}
      </li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
  
  export default Navbar;