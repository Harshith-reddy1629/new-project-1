import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="image-sec-layer">
      <div className="image-first-layer">
        <img
          //   src="https://res.cloudinary.com/reddyimgs/image/upload/v1686216028/9893906f-6524-4032-8a0a-7fca0b73c3e4_ur1i91.jpg"
          src="https://res.cloudinary.com/reddyimgs/image/upload/v1691240886/IMG_20230728_135154_wvky9r.jpg"
          alt="profile"
          className="profile-image"
        />
      </div>
    </div>
    <div className="text-con">
      <div className="details-con">
        <h1 className="name-text">
          HI, I&apos;m{' '}
          <span
            // style={{
            //   transform: `translateX(100px) translateY(100px)`,
            // }}
            className="name"
          >
            HARSHITH REDDY
          </span>
        </h1>
        <p className="desc-text">Aspiring MERN Stack Developer</p>
        <p className="home-para-text">
          {' '}
          In these <span className="hl-text">portfolio</span>,
          <br /> you will find a comprehensive overview of who I am.
          <br /> It serves as a reflection of my skills, and accomplishments.
        </p>
      </div>

      <h1 className="tool css-el">.CSS</h1>
      <h1 className="html-el tool ">HTML</h1>
      <h1 className="tool py-el">print(&apos;Python&apos;)</h1>
      <h1 className="tool js-el">console.log(&apos;JS&apos;)</h1>
      <h1 className="tool node-el">require(&apos;NodeJs&apos;)</h1>
      <h1 className="tool react-el">import &quot;react&quot; ;</h1>
      <h1 className="tool sql-el">SQL</h1>
    </div>
  </div>
)

export default Home
