import "./header.scss";

export default function Header() {
  return (
      <header>
        <nav>
          <div className="img_header">
            <img src="rond profil.png" alt="image" />
          </div>
          <a href="#">Se déconnecter</a>
          <a href="#">Ajouter un projet</a>
          <div className="logo">
            <img src="espl logo.png" alt="image" />
          </div>
          <h1>BIENVENUE</h1>
        </nav>
      </header>
  );
}
