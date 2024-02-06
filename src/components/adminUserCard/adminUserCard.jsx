import "./adminUserCard.scoped.scss";

import React, { useState } from 'react';

export default function AdminUserCard(data) {

        const [isModalOpen, setModalOpen] = useState(false);
        const toggleModal = () => setModalOpen(!isModalOpen);

        const user = data.data;

    return (

            <div className="admin-user-card">
                <div className="user-card-profile-picture">
                    <img src="../../../defaultavatar.png" alt="Photo de profil de l'utilisateur" loading="lazy" />
                </div>
                <div className="user-card-account-info">
                    <div className="user-card-name">{user.prenom} {user.nom}</div>
                    <div className="user-card-mail">{user.email}</div>
                </div>
                <div className="user-card-role">
                    {user.roles}
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