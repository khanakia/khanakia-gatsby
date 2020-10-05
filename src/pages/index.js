import React from "react"

// import Navbar from '../components/NavBar'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="container header">

        <div className="hero">
          <div className="s-100"></div>
          <h1>
            <span>Excellence</span> in software development
          </h1>
          <div className="mt-4">
            We help enterpreneurs bring their ideas to life by leveraging design
            and technology
          </div>

          <div className="mt-2 font-weight-bold">
            Contact us:{" "}
            <a href="mailto:hello@khanakia.com">
              <u>hello@khanakia.com</u>
            </a>
          </div>
        </div>

        <div className="s-150"></div>

        <div className="">
          <h2 className="heading-2">What we do</h2>
          <p>
            We have experience building bespoke websites, web apps and mobile
            apps and developing user friendly UX/UI designs. We are believers
            that it does not matter which industry you are in, all of it is
            affected by technology.
          </p>
        </div>

        {/* <div className="s-100"></div> */}

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <i className="fad fa-browser iconService mb-4"></i>
                <h2>Web development</h2>
                <p className="card-text">
                  Having more than 10 years experience in web development, we
                  serve our clients to deliver complex web applications as well
                  as custom or simple landing pages.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <i className="fad fa-mobile iconService mb-4"></i>
                <h2>Mobile development</h2>
                <p className="card-text">
                  From simple, quick hybrid demo apps to solid native mobile
                  experience - we do it all. We use best frameworks to provide
                  the best mobile development solution possible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <i className="fab fa-sketch iconService mb-4"></i>
                <h2>Product design</h2>
                <p className="card-text">
                  We work with top class UX/UI professionals to create seamless
                  and unique experiences. When it comes to design phase - we
                  have the competences for the whole journey.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-hands-helping iconService mb-4"></i>
                <h2>IT support and maintenance</h2>
                <p className="card-text">
                  We provide flexible support and maintenance plans, whether
                  it's a small landing page or a complex web/mobile solution -
                  we will provide a tailored package just for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="s-100"></div>

        <h2 className="heading-2 mb-5">Latest Case studies</h2>
        <div className="caseStudies">
          <div className="item uxm">
            <div className="left">
              <h2 className="logo">The UXM</h2>
              <p className="desc">
                You can find a great deal on everything from a designer handbag
                to a container of auto parts. You’ll enjoy discounts and bonuses
                from all around the world and right in your own backyard.
              </p>

              <h4 className="headingService">Services</h4>

              <ul className="services">
                <li>
                  Web application <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>
                  Server Administration <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>Product Design</li>
              </ul>

              <div className="website">
                <a target="_blank" href="https://theuxm.com">
                  www.theuxm.com
                </a>
              </div>
            </div>
            <div className="right">
              <img className="productLaptop" src={"/theuxm-banner.png"} />
            </div>
          </div>

          <div className="item mobilegoo">
            <div className="left">
              <h2 className="logo">Mobilegoo</h2>
              <p className="desc">
                Mobilegoo lets you to sell your old mobile handset, tablet, and
                laptops at high price. App analyse and diagnose automatically
                hardware and software condition of your mobile by smart
                technology after analysation provides exact worth of it.
              </p>

              <h4 className="headingService">Services</h4>

              <ul className="services">
                <li>
                  Mobile application <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>
                  Web application <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>Product Design</li>
              </ul>

              {/* <div className="appLinks">
                  <a href="https://apps.apple.com/in/app/mobilegoo-sell-used-phones/id1421057469" target="_black"><img src={"/ios-store.svg"} /> </a>
                  <a href="https://play.google.com/store/apps/details?id=com.mobilegoo" target="_black"><img src={"/google-store.svg"} /> </a>
                </div> */}
            </div>
            <div className="right">
              <img className="productMobile" src={"/mg-banner.png"} />
            </div>
          </div>

          <div className="item tsz">
            <div className="left">
              <h2 className="logo">The Safe Zone</h2>
              <p className="desc">
                The Safe Zone is a security and society management software
                application for residential complexes. At this time of alarming
                crime rate, The Safe Zone is a single stop solution to make your
                societies safer than ever.
              </p>

              <h4 className="headingService">Services</h4>

              <ul className="services">
                <li>
                  Mobile application <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>
                  Web application <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                </li>
                <li>Product Design</li>
              </ul>

              {/* <div className="appLinks">
                  <a href="https://apps.apple.com/in/app/mobilegoo-sell-used-phones/id1421057469" target="_black"><img src={"/ios-store.svg"} /> </a>
                  <a href="https://play.google.com/store/apps/details?id=com.thesafezone&hl=en" target="_black"><img src={"/google-store.svg"} /> </a>
                </div> */}
            </div>
            <div className="right">
              <img className="productMobile" src={"/tsz-banner.png"} />
            </div>
          </div>
        </div>

        {/* <div id="carouselExampleIndicators" className="carousel slide testimonials" data-ride="carousel" data-interval="10000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          Scale3C delivers consistently high-quality products, setting them apart from past vendors and leading to more work for the team. Their constant communication, quality of work, and broad range of technical expertise allow for a consistently smooth collaboration.
          
          <div className="person">Joseph, Hortitrends</div>

          </div>
          <div className="carousel-item">
            bb
          </div>
          <div className="carousel-item">
            ccc
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

        {/* <div className="s-100"></div> */}
        <h2 className="heading-2 mb-5">Success stories from our Partners</h2>

        <div className="row testimonials">
          <div className="col-md-4 mb-4">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>
              We have worked with khanakia on a number of in-house and client
              projects. The team have always delivered quality coding projects
              for us on-time and within budget. I am more than happy to
              recommend them.
              <div className="person">Joseph Blair, Hortitrends</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>I have had the pleasure of
              working with khanakia over the last few years. Over the years they
              has gone from a resource to a key part of our company. We look
              forward to growing our relationship over the years to come.
              <div className="person">Shiva, Mobilegoo</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>
              We thank khanakia for the wonderful job in helping us develop our
              program. Everyone was professional, excellent and hard working.
              Thanks to them, we look forward to continue working with them in
              the future
              <div className="person">Shannon, Glamourstudio</div>
            </div>
          </div>
        </div>


      <div className="ctabox">
          <div className="inner">
            <h2>Our practice is built around your needs</h2>
            <p className="mt-3">Let us take the weight of product development off your shoulders and boost your digital presence.</p>
            
            <a className="btn btn-light btn-lg mt-3" href="mailto:hello@khanakia.com">Let's Talk</a>
          </div>
      </div>

      </div>
    </Layout>
  )
}
