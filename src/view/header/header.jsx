import "./header.scss";

export default function Header() {
  return (
    <body>
      <header>
        <nav>
          <div class="img_header">
            <img src="rond profil.png" alt="image" />
          </div>
          <a href="#">Se déconnecter</a>
          <a href="#">Ajouter un projet</a>
          <div class="logo">
            <img src="espl logo.png" alt="image" />
          </div>
          <h1>BIENVENUE</h1>
        </nav>
      </header>

      <div class="card-container">
        <div class="card">
          <div class="card-title">Carte 1</div>
          <hr/>

          <p>Informations</p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            impedit eos, error explicabo exercitationem aperiam, animi numquam
            rerum officiis sunt quod sed eligendi. Aliquam similique rem
            reiciendis officia illum itaque.
          </p>

          <p>Informations</p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            impedit eos, error explicabo exercitationem aperiam, animi numquam
            rerum officiis sunt quod sed eligendi. Aliquam similique rem
            reiciendis officia illum itaque.
          </p>

          <p>competance</p>

          <p></p>
        </div>
      </div>
    </body>
  );
}
