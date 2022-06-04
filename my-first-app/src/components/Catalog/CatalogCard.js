import { Link } from "react-router-dom";


const CatalogCard = ({
    game
}
) => {
    return (
        <div className="allGames">
        <div className="allGames-info">
            <img src={game.imageUrl} alt="game"/>
            <h6>{game.type}</h6>
            <h2>{game.title}</h2>
            <Link to={`/details/${game._id}`} className="details-button">Details</Link >
        </div>
    </div>
    );  
}

export default CatalogCard;