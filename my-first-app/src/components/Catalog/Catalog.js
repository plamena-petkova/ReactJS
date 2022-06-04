
import { Suspense, useEffect, useState } from "react";
import CatalogCard from "./CatalogCard";
import * as gameService from "../../services/gameService";

const Catalog = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
            .catch(err => {
                console.log(err)
            }) 
    }, []);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
      <Suspense fallback={<p>Loading...</p>}>

        <div className="allGames">

        {games.length > 0
        ? games.map(x => <CatalogCard key={x._id} game={x} />)
        : <h3 className="no-articles">No articles yet</h3>
        }
    </div>
    </Suspense>
    </section>
    );
}

export default Catalog;