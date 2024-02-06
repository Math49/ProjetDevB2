import "./adminUserCard.scoped.scss";

import React, { useState } from 'react';

export default function AdminUserCard() {

        const [isModalOpen, setModalOpen] = useState(false);
        const toggleModal = () => setModalOpen(!isModalOpen);

    return (

            <div className="admin-user-card">
                <div className="user-card-profile-picture">
                    <img src="../../../defaultavatar.png" alt="Photo de profil de l'utilisateur" loading="lazy" />
                </div>
                <div className="user-card-account-info">
                    <div className="user-card-name">LANDAIS Samuel</div>
                    <div className="user-card-mail">samuel.landais.pro@gmail.com</div>
                </div>
                <div className="user-card-role">
                    Étudiant
                </div>
                <span class="context-menu" onClick={toggleModal} style={{ display: isModalOpen ? 'none' : 'inline' }}>...</span>
                {isModalOpen && (
                    <div className="context-menu-actions-wrapper">
                        <span className="context-menu-close" onClick={toggleModal} >&times;</span>
                        <div className="context-menu-actions">
                            <button onClick={() => console.log('Éditer')}>Éditer</button>
                            <button onClick={() => console.log('Supprimer')}>Supprimer</button>
                        </div>
                    </div>
                )}
            </div>

            

    )
}