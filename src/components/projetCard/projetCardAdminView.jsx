import "./projetCard.scss";

export default function ProjetCardAdminView({ data }) {

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
                <h3>Équipe</h3>
                <span className="equipe">
                    <p>Samuel, Mathis, Florian, Samy, Adrien, Nicolas</p>
                </span>
            </div>
        </div>
    );
}
