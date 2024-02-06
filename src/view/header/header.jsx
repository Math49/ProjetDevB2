import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="title">
        <a href="/">
          <img src="/espl-logo.png" alt="image" />
        </a>
        <h1>ESLP hub</h1>
      </div>
      <nav className="nav">
        <a href="/home">Ajouter un projet</a>
        <button>compte</button>
      </nav>
    </header>
  );
}
