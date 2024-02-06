import './sidebar.scoped.scss';
import { SidebarData } from './sidebarData';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(

        <div className="sidebar">

        <ul className="sidebar-menu">

            {SidebarData.map((val, key) => {
                return (
                    <li key={key} className={`sidebar-menu-item ${window.location.pathname === val.link ? "menu-active" : ""}`}>
                        <Link to={val.link}>
                            {val.icon}
                            {val.title}
                        </Link>
                    </li>
                )
            })}

        </ul>

        </div>

    )
}
