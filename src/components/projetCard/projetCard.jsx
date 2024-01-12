import "./projetCard.scss"

export default function ProjetCard({data}){

    
    const competences = Object.entries(data.competences).filter((c) => c[1])
    


    return  <div className="card">
                <h1 className="card-title">{data.nom}</h1>
                <p>Concept :</p>
                <p>{data.description}</p>

                <p>Compétences :</p>
                {competences.map((comp) =>
                    <p key={comp[0]}>{comp[0]}</p>
                )}
            </div>
}