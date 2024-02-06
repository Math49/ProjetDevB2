import "./singleProject.scss";
import { useParams, useLocation } from "react-router-dom";

export default function SingleProject() {

    const { projectId } = useParams();
    const location = useLocation();

    const competences = Object.entries(location.state.project.competences).filter((c) => c[1])

    return (
    <div className="single-wrapper global-wrapper">
        <div className="single-left">
                <div className="single-left__btn">
                    <a href="/" className="btn bg-orange">
                        Retourner a la liste des projets
                    </a>
                </div>
            <div className="single-project">
                <div className="single-project__title">
                        <h2 className="project-title">{location.state.project.nom}</h2>
                        <span>-</span>
                        <h2 className="society-name">Entreprise</h2>
                </div>
                <div className="single-project__content">
                    <div className="single-project__objectif">
                        <p className="submenu-title">Objectifs</p>
                        <p>
                            {location.state.project.objectifs}
                        </p>
                    </div>
                    <div className="single-project__description">
                        <p className="submenu-title">Description du projet</p>
                        <p>
                            {location.state.project.description}
                        </p>
                    </div>
                    <div className="single-project__participant">
                        <p className="submenu-title">Participants</p>
                        <ul>
                            <li>
                                Samy Ziane<p className="is-chef-project">Chef de projet</p>
                                <p className="competence">Développement Web</p>
                            </li>
                            <li>
                                Mathis Mercier<p className="competence">Développement Web</p>
                            </li>
                            <li>
                                Samuel Landais<p className="competence">Développement Web</p>
                            </li>
                        </ul>
                    </div>
                    <div className="single-project__competences">
                        <p className="submenu-title">Compétences requises</p>
                        <div className="competences">
                            {competences.map((comp) =>
                                <p key={comp[0]} className="competence">{comp[0]}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
