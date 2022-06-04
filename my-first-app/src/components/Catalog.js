
import CatalogCard from "./CatalogCard";

const Catalog = () => {
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
      
        <div className="allGames">

        <CatalogCard />

        </div>

        <h3 className="no-articles">No articles yet</h3>
    </section>
    );
}

export default Catalog;