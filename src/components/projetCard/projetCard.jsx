import "./projetCard.scss";

export default function ProjetCard({ data }) {
    console.log(data);
    const competences = Object.entries(data.competences).filter((c) => c[1]);


    return (
        <div className="card">
            <div className="title-row">
                <h2 className="card-title">{data.nom}</h2>
                <span>-</span>
                <p>{data.auteur}</p>
            </div>
            <div className="objectif row">
                <h3>Objectifs</h3>
                <p>{data.objectifs}</p> 
            </div>
            <div className="desc row">
                <h3>Description du projet</h3>
                <p>{data.description}</p>
            </div>
            <div className="compe row">
                <h3>Compétences</h3>
                <div className="cmp">
                {competences.map((comp) => (
                    <p key={comp[0]}>{comp[0]}</p>
                ))}
            </div>
        </div>
    </div>
    );
}
