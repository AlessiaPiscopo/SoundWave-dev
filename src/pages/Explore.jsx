import { Link } from "react-router-dom";

// TODO: apply styles for active/inactive links

const Explore = () => {
  return (
    <div className="explore">
      <header className="page-header">
        <h1 className="page-header-text">Explore & Discover New Music</h1>
      </header>

      <main>
        {/* GENRES ------------------------------------ */}
        <article className="explore-by-genre">
          <Link to="/explore/genres">
            <h2 className="explore-by-genre-text">Genres</h2>
          </Link>
        </article>

        {/* ARTISTS ------------------------------------ */}
        <article className="explore-by-artist">
          <Link to="/explore/artists">
            <h2 className="explore-by-artist-text">Artists</h2>
          </Link>
        </article>
      </main>
    </div>
  );
};

export default Explore;
