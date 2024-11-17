 import Image from "next/image";
 
 import natural from '.public/natural.png';
 import imagegirl from '.public/imagegirl2.png';
 export default function port(){
   return(

<div>
 
  
<div className="container ">
  

  {/* <div className="image"> */}
  
  

  <div className="leftside">
  <div className="image">
    <Image src={"/natural.png"}
    width={100}
    height={100}
    alt={""}
    />


  </div>
    <div className="name">
     ALIZAH FAYYAZ</div>
     <br></br>
   <p className="text">STUDENT AT GIAIC / HTML EXPERT</p>
  <ul className="list"> 
    <br></br>
    <ul>&nbsp;&nbsp;Residence&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pakistan</ul>
    <ul>&nbsp;&nbsp;City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karachi</ul>
    <ul>&nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17</ul>
    </ul>
    
<hr className="line"></hr>
<br></br>
<h1>LANGUAGE</h1>
<br></br>
<div className="progress-container">

<div role="progressbar" 
aria-valuenow={90}
aria-valuemin={0}
aria-valuemax={100}
style={{"--value":"90" }as any}>
</div>
{/* <br></br>
<br></br>
<br></br>
<div className="urdu"><h2 >URDU</h2></div> */}
<div role="progressbar" 
aria-valuenow={88}
aria-valuemin={0}
aria-valuemax={100}
style={{"--value":"88" }as any}></div>
</div>


 <div className="english"><h1 >ENGLISH</h1></div> 
  </div>
 
 <div className="language"></div>
 <br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br><br></br> <br></br>
 <div className="urdu"><h2 >URDU</h2></div>
 {/* <div className="english"><h1 >ENGLSIH</h1></div>  */}
 <hr className="line2"></hr>

  </div>
  
 <div className="rightside">
  <div className="image2">

  {/* <Image className= "imagess" src={"/imagegirl2.png"}
  width={100}
  height={100}
  alt=""/> */} 
  <div className="intro"><p className="bold">HEY CHECK THIS OUT!</p>
    
    <p className="light">I AM A FRONT-END DEVELOPER</p>
    
   
    <br></br>
    <button className="button">EXPLORE</button>
    <p className="P">MORE ABOUT ME:</p>
    <div className="parent-box">
    <div className="box"> 
    <h1 className="heading"><u>Skills and Learning:</u></h1>

<p > "always eager to expand my skillset, I have a foundation in HTML, CSS, and TypeScript, and I am currently diving deeper into Next.js. I enjoy building projects that help me apply what I am learning."</p>
    </div>
    <div className="box2">
    <h1 className="heading"><u>Projects and Experience:</u></h1>
    <p >"From building navigation bars to creating profile layouts, I’ve been honing my web development skills one project at a time. As a beginner, I focus on mastering the fundamentals </p>
    </div>
      <div className="box3">
      <h1 className="heading"><u> Work Ethic and Goals:</u></h1> 
      "With a strong sense of responsibility and attention to detail, I take pride in delivering my best work. I aim to continue learning and growing in web development,eventually mastering frameworks. </div>
      <div className="box4"><h1 className="heading"><u>Vision for the Future</u></h1>
     "I envision myself creating innovative solutions . As I progress in my coding journey, I strive to blend creativity with technology to build user-friendly and impactful projects that inspire others."</div>
      </div>
</div>
  </div>
 
  </div>
</div>

  )} 
 



