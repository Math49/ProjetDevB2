import "./projetCard.scss";

export default function ProjetCard({ data }) {
    const competences = Object.entries(data.competences).filter((c) => c[1]);

    const getColorById = id => {
        const colors = {
          dev: '#C42D2D',
          graphisme: '#2D72C4',
          marketing: '#9D2DC4',
          webdesign: '#1DBA23',
          communication: '#C84DDC',
        };
        return colors[id] || '#defaultColor';
      };
      

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
                    {competences.map(comp => (
                        <span key={comp[0]} style={{ backgroundColor: getColorById(comp[0]) }}>
                        {comp[0]}
                        </span>
                    ))}
                </div>
            <div>
                
            </div>
        </div>
    </div>
    );
}
