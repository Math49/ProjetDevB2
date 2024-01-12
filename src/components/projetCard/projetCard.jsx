import "./projetCard.scss";

export default function ProjetCard({ data }) {
  const competences = Object.entries(data.competences).filter((c) => c[1]);

  return (
    <div className="card">
        <div className="title-row">
      <h2 className="card-title">{data.nom}</h2>
      <span>-</span>
      <p>nom de l'entreprise</p>
      </div>

      <div className="texte">
        <p>Objectifs</p>
      </div>{" "}
      <p>{data.objectifs}</p>
      <div className="texte">
        <p>Description du projet</p>
      </div>{" "}
      <p>{data.description}</p>
      <div className="texte">
        <p>Competences</p>
      </div>
      <div className="cmp">
      {competences.map((comp) => (
        <p key={comp[0]}>{comp[0]}</p>
      ))}
      </div>
    </div>
    
    
  );
}
