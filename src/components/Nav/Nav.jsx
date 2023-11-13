// import {ReactComponent as ReactLogo} from '/images/logo.avif';

// const ReactLogo ='/Images/logo.avif'

import "./Nav.css"

const Nav = () => {
     const links = ["Services", "Technologies", "Industris", "Portfolio", "Blog", "Company"]
    return (
        <nav className="container">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3LF8LvX6rVhvBAr_jnh7W7TCJVdAecf7Fw&usqp=CAU" alt="" />
         

            </div>
            <div className="link"> 
            {
                links.map((links) => (
                    <a key={links} >
                        {links}
                    </a>
                ))
            }

            <button className="btn1">Contact US</button>
            </div>

        </nav>

    )
}

export default Nav;