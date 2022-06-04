import { NavLink} from 'react-router-dom'



const Header = () => {
    return (
        <header>
  
        <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
        <nav>
            <NavLink to="/catalog">All games</NavLink>
     
            <div id="user">
                <NavLink to="/create">Create Game</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </div>
      
            <div id="guest">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </nav>
    </header>
    );
}

export default Header;