import './sidebar.scoped.scss';
import { SidebarData } from './sidebarData';

export default function Sidebar(){
    return(

        <div className="sidebar">

        <ul className="sidebar-menu">

            {SidebarData.map((val, key) => {
                return (
                    <li key={key} className={`sidebar-menu-item ${window.location.pathname === val.link ? "menu-active" : ""}`}>
                        <a href={val.link}>
                            {val.icon}
                            {val.title}
                        </a>
                    </li>
                )
            })}

        </ul>

        </div>

    )
}
