import './scss/style.scss'

export const App = () => {

  return (
    <div className="resume-box">
	
      <div className="left-section">
        <div className="profile">
        <img src="image/profile.jpg" className="profile-img"/>
        <div className="blue-box"></div>
        </div>
        <h2 className="name">Viktor <br/><span>Niedens</span></h2>
        <p className="n-p">Frontend Developer</p>


        <div className="info">
          <p className="heading">Info</p>
          <p className="p1"><span className="span1"><img src="image/location.png"/> Alte-Stöckener-Str. 12</span></p>
          <p className="p1"><span className="span1"><img src="image/call.png"/>+49 1522 805 3924</span></p>
          <p className="p1"><span className="span1"><img src="image/mail.png"/>vktr.ndns@gmail.com</span></p>
          <p className="p1"><span className="span1"><img src="image/domain.png"/>www.vktrn.com</span></p>
        </div>

        <div className="info">
          <p className="heading">Social</p>
          <p className="p1"><span className="span1"><img src="image/twitter.png"/></span>Twitter<span> <br/>demotwitter.com</span></p>
          <p className="p1"><span className="span1"><img src="image/linkedin.png"/></span>Linkdin<span> <br/>linkdindemo.com</span></p>
          <p className="p1"><span className="span1"><img src="image/facebook.png"/></span>Xing<span> <br/>facebookdummy.com</span></p>
        </div>

      </div>

      <div className="right-section">
        <div className="right-heading">
          <img src="image/user.png"/>
          <p className="p2">Profile</p>
        </div>
        <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

        <div className="clearfix"></div>
        <br/><br/>
        <div className="right-heading">
          <img src="image/pencil.png"/>
          <p className="p2">Work Experience</p>
        </div>
        <div className="clearfix"></div>

        <div className="lr-box">
        <div className="left">
          <p className="p4">Since 2021</p>
          <p className="p5">Wolfsburg</p>
        </div>

        <div className="right">
          <p className="p4">Frontend Developer</p>
          <p className="p5">Treubrodt-Consulting</p>
          <p className="p5">React.js, node.js, TypeScript.</p>
        </div>
        <div className="clearfix"></div>
        </div>

 


        <br/>
        <div className="right-heading">
          <img src="image/edu.png"/>
          <p className="p2">Education</p>
        </div>
        <div className="clearfix"></div>

        <div className="lr-box">
        <div className="left">
          <p className="p4">2017 - 2021</p>
          <p className="p5">Hannover</p>
        </div>

        <div className="right">
          <p className="p4">Leibniz Universität Hannover</p>
          <p className="p5">Computational Methods in Engineering</p>
        </div>
        <div className="clearfix"></div>
        </div>

        <div className="lr-box">
        <div className="left">
          <p className="p4">2013 - 2017</p>
          <p className="p5">Braunschweig</p>
        </div>

        <div className="right">
          <p className="p4">TU Braunschweig</p>
          <p className="p5">Mechanical Engineering</p>
        </div>
        <div className="clearfix"></div>
        </div>



        <br/>
        <div className="right-heading">
          <img src="image/edu.png"/>
          <p className="p2">Skill and expertize</p>
        </div>
        <div className="clearfix"></div>
        <div className="s-box">
          <p className="p6">Grapic Design</p>
          <div id="progress"></div>
          <p className="p6">Web Design</p>
          <div id="progress1"></div>
          
        </div>
        <div className="s-box">
          <p className="p6">HTML</p>
          <div id="progress2"></div>
          <p className="p6">CSS</p>
          <div id="progress3"></div>
        </div>


        {/* <div className="clearfix"></div>
        <br/><br/>
        <div className="right-heading">
          <img src="image/hobbies.png"/>
          <p className="p2">Hobby & Internet</p>
        </div>
        <div className="clearfix"></div>
        <img src="image/bicycle.png" className="h-img"/>
        <img src="image/games.png" className="h-img"/>
        <img src="image/book.png" className="h-img"/>
        <img src="image/design.png" className="h-img"/>
        <img src="image/chess.png" className="h-img"/> */}

      </div>

		  <div className="clearfix"></div>

    </div>
  )
}