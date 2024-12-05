import blogObject from '../../components/blogObject/blogObject'



export default function BlogSection(){
    return(
        <div>
             <div className="main">

<div className="container">

  {/* <!--
    - BLOG SECTION
  --> */}

  <div className="blog">

    <h2 className="h2">Latest Blog Post</h2>

    <div className="blog-card-group">

      <div className="blog-card">

        <div className="blog-card-banner">
          <img src={require('../../assets/blog-1.png')} alt="Building microservices with Dropwizard, MongoDB & Docker"
            width="250" className="blog-banner-img" />
        </div>

        <div className="blog-content-wrapper">

          <button className="blog-topic text-tiny">Database</button>

          <h3>
            <a href="#" className="h3">
              Building microservices with Dropwizard, MongoDB & Docker
            </a>
          </h3>

          <p className="blog-text">
            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
            relational
            databases, easy to use and the multi-platform is the best option for scale up and have fault
            tolerance, load balancing,
            map reduce, etc.
          </p>

          <div className="wrapper-flex">

            <div className="profile-wrapper">
              <img src={require('../../assets/author.png')} alt="Julia Walker" width="50" />
            </div>

            <div className="wrapper">
              <a href="#" className="h4">Julia Walker</a>

              <p className="text-sm">
                <time datetime="2022-01-17">Jan 17, 2022</time>
                <span className="separator"></span>
                <ion-icon name="time-outline"></ion-icon>
                <time datetime="PT3M">3 min</time>
              </p>
            </div>

          </div>

        </div>

      </div>




      
        {blogObject.map((row , i) => {
          return(
          
      <div className="blog-card">

      <div className="blog-card-banner">
        <img src={row.blogImage} alt="Building microservices with Dropwizard, MongoDB & Docker"
          width="250" className="blog-banner-img" />
      </div>

      <div className="blog-content-wrapper">

        <button className="blog-topic text-tiny">Database</button>

        <h3>
          <a href="#" className="h3">
            {row.title}
          </a>
        </h3>

        <p className="blog-text">
          This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
          relational
          databases, easy to use and the multi-platform is the best option for scale up and have fault
          tolerance, load balancing,
          map reduce, etc.
        </p>

        <div className="wrapper-flex">

          <div className="profile-wrapper">
            <img src={require('../../assets/author.png')} alt="Julia Walker" width="50" />
          </div>

          <div className="wrapper">
            <a href="#" className="h4">Julia Walker</a>

            <p className="text-sm">
              <time datetime="2022-01-17">{row.authorInfo.authorDate}</time>
              <span className="separator"></span>
              <ion-icon name="time-outline"></ion-icon>
              <time datetime="PT2M">{row.authorInfo.authorMin}</time>
            </p>
          </div>

        </div>

      </div>

    </div>




          
          )
})
        }
      











    </div>

    <button className="btn load-more">Load More</button>

  </div>





  {/* <!--
    - ASIDE
  --> */}

  <div className="aside">

    <div className="topics">

      <h2 className="h2">Topics</h2>

      <a href="#" className="topic-btn">
        <div className="icon-box">
          <ion-icon name="server-outline"></ion-icon>
        </div>

        <p>Database</p>
      </a>

      <a href="#" className="topic-btn">
        <div className="icon-box">
          <ion-icon name="accessibility-outline"></ion-icon>
        </div>

        <p>Accessibility</p>
      </a>

      <a href="#" className="topic-btn">
        <div className="icon-box">
          <ion-icon name="rocket-outline"></ion-icon>
        </div>

        <p>Web Performance</p>
      </a>

    </div>

    <div className="tags">

      <h2 className="h2">Tags</h2>

      <div className="wrapper">

        <button className="hashtag">#mongodb</button>
        <button className="hashtag">#nodejs</button>
        <button className="hashtag">#a11y</button>
        <button className="hashtag">#mobility</button>
        <button className="hashtag">#inclusion</button>
        <button className="hashtag">#webperf</button>
        <button className="hashtag">#optimize</button>
        <button className="hashtag">#performance</button>

      </div>

    </div>

    <div className="contact">

      <h2 className="h2">Let's Talk</h2>

      <div className="wrapper">

        <p>
          Do you want to learn more about how I can help your company overcome problems? Let us have a
          conversation.
        </p>

        <ul className="social-link">

          <li>
            <a href="#" className="icon-box discord">
              <ion-icon name="logo-discord"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="icon-box twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="icon-box facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </div>

    <div className="newsletter">

      <h2 className="h2">Newsletter</h2>

      <div className="wrapper">

        <p>
          Subscribe to our newsletter to be among the first to keep up with the latest updates.
        </p>

        <form action="#">
          <input type="email" name="email" placeholder="Email Address" required />

          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>

      </div>

    </div>

  </div>

</div>

</div>
        </div>
    )
}