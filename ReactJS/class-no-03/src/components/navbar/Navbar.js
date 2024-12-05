



function Navbar(){
    return(
        <div>
          
  {/* <!--
    - #HEADER
  --> */}

  <header>

    <div className="container">

      <nav className="navbar">

        <a href="#">
            
          <img src={require("../../assets/logo-dark.png")} alt="react Logo" width="150" className="logo-light" />
          <img src={require('../../assets/logo-light.png')} alt="SimpleBlog logo" width="150" className="logo-dark" />
        </a>

        <div className="btn-group">

          {/* <button className="theme-btn theme-btn-mobile light" >
            <ion-icon name="moon" className="moon "></ion-icon>
            <ion-icon name="sunny" className="sun"></ion-icon>
          </button> */}
{/* 
          <button className="nav-menu-btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button> */}

        </div>

        <div className="flex-wrapper">

          <ul className="desktop-nav">

            <li>
              <a href="/" className="nav-link">Home</a>
            </li>

            <li>
              <a href="/about" className="nav-link">About Me</a>
            </li>

            <li>
              <a href="/contact" className="nav-link">Contact</a>
            </li>

          </ul>

          <button className="theme-btn theme-btn-desktop light">
            <ion-icon name="moon" className="moon"></ion-icon>
            <ion-icon name="sunny" className="sun"></ion-icon>
          </button>

        </div>

        <div className="mobile-nav">

          <button className="nav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="wrapper">

           

            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">About Me</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>

          </div>

        </div>

      </nav>

    </div>

  </header>


        </div>
    );
}

export default Navbar