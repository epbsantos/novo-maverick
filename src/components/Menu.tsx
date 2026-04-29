import menu from "../constants/menu";

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <a target="_blank" href={menu.link2_url}>{menu.link2_name}</a>
                </li>
                <li>
                    <a target="_blank" href={menu.link3_url}>{menu.link3_name}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;