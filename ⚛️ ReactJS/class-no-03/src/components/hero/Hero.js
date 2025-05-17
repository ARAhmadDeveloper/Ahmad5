





export default function Hero(){
    return(
        <div>
           
    {/* <!--
      - #HERO SECTION
    --> */}

    <div className="hero">

      <div className="container">

        <div className="left">

          <h1 className="h1">
            Hi, I'm <b style={{color: '#667fea'}}>Julia&nbsp;Walker</b>.
            <br />Web Developer
          </h1>

          <p className="h3" style={{color : '#8799b2'}}>
            Specialized in <abbr title="Accessibility">a11y</abbr>
            and Core Web Vitals
          </p>

          <div className="btn-group">
            <a href="#" className="btn btn-primary">Contact Me</a>
            <a href="#" className="btn btn-secondary">About Me</a>
          </div>

        </div>

        <div className="right">

          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src={require("../../assets/hero.png")} alt="Julia Walker" className="hero-img" />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>

        </div>

      </div>

    </div>
</div>




    );
}

