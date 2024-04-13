import image1 from '../assets/githublogo.png';
export default function Navbar(){
    return(
       <>
        <div className="nav">
           <div className="element1">
           <div className="logo">
            <img src={image1} alt="github" />
           </div>
            <div className="logoname">GitGet</div>
           </div>
           {/* <div className="person1">Person1</div> */}
        </div>
        </>
    );
}
