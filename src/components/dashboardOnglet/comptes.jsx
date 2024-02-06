import AdminUserCard from "../adminUserCard/adminUserCard"

export default function Comptes() {
    return (
        <div className="comptes">

            <a href="/register" className="add-account">
                <img src="../../../add-user.png" alt="Ajouter un utilisateur" className="add-user-icon" />
                Ajouter un compte
            </a>

            <div className="comptes-list">
                <AdminUserCard/>
            </div>


        </div>
    )
}