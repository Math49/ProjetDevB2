import "./singleProject.scss";

export default function SingleProject() {
  return (
    <div className="single-wrapper global-wrapper">
        <div className="single-left">
                <div className="single-left__btn">
                    <a href="" className="btn bg-orange">
                        Retourner a la liste des projets
                    </a>
                    <a href="" className="btn bg-blue">
                        Projet terminé
                    </a>
                </div>
            <div className="single-project">
                <div className="single-project__title">
                        <h2 className="project-title">Projet lorem ipsum</h2>
                        <span>-</span>
                        <h2 className="society-name">Entreprise</h2>
                </div>
                <div className="single-project__content">
                    <div className="single-project__objectif">
                        <p className="submenu-title">Objectifs</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                            iste quis veniam quia totam. Tempora nemo nesciunt enim odit
                            soluta assumenda modi temporibus dignissimos possimus aut.
                            Expedita consectetur ratione incidunt.
                        </p>
                    </div>
                    <div className="single-project__description">
                        <p className="submenu-title">Description du projet</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus debitis laudantium porro vitae nobis at architecto
                            fugiat distinctio aspernatur odit! Totam tenetur quisquam ab
                            odit aliquid perferendis maxime inventore sed? Nisi accusantium
                            a voluptates quasi aliquid consectetur doloribus, praesentium in
                            mollitia quibusdam accusamus quidem, consequatur minus ipsa
                            sequi? Illo doloremque fuga dolore eos. Eos corrupti eaque, non
                            doloremque rem ex! Ipsum earum obcaecati quos dignissimos ex
                            dolore labore. A explicabo deleniti ipsum voluptatem
                            consequuntur consectetur repellendus odit nostrum est
                            reprehenderit asperiores voluptas, ex aliquam sed eaque rem
                            beatae tempora veritatis.
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
                            <p className="competence">Graphisme</p>
                            <p className="competence">Développement Web</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="single-right">
            <div className="single-historic">
                <div className="submenu-title">Historique de la progression</div>
                <div className="commit">
                    <span className="commit__date">XX/XX/XXXX</span>
                    <p className="commit__content">
                        Lorem ipsum dolor sit amet consectetur. Amet donec pulvinar ornare quis volutpat lectus. Quam lobortis duis semper orci dictum. Nunc sagittis amet molestie mauris bibendum elit tellus amet nunc. Porta at sed ornare augue vulputate dui malesuada. Tellus nunc risus.
                    </p>
                </div>
                <div className="commit">
                    <span className="commit__date">XX/XX/XXXX</span>
                    <p className="commit__content">
                        Lorem ipsum dolor sit amet consectetur. Amet donec pulvinar ornare quis volutpat lectus. Quam lobortis duis semper orci dictum. Nunc sagittis amet molestie mauris bibendum elit tellus amet nunc. Porta at sed ornare augue vulputate dui malesuada. Tellus nunc risus.
                    </p>
                </div>
                <div className="commit">
                    <span className="commit__date">XX/XX/XXXX</span>
                    <p className="commit__content">
                        Lorem ipsum dolor sit amet consectetur. Amet donec pulvinar ornare quis volutpat lectus. Quam lobortis duis semper orci dictum. Nunc sagittis amet molestie mauris bibendum elit tellus amet nunc. 
                    </p>
                </div>
            </div>
            <div className="actualisation-project">
                <div className="submenu-title">Actualiser la progression</div>
                <div className="input-date">
                    <label htmlFor="date">Date de la mise à jour</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div className="input-commit">
                    <label htmlFor="commentaire">Commentaire</label>
                    <textarea name="commentaire" id="commentaire" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
  );
}
