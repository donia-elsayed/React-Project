import myImg from '../../assets/images/My-Image.jpg';
import { FaGithub,FaLinkedin,FaPhoneSquareAlt,FaBootstrap,FaAngular,FaReact,FaGitSquare } from "react-icons/fa";
import {SiGmail,SiHtml5,SiCss3,SiJavascript,SiTypescript,SiRedux,SiJquery,SiSass} from "react-icons/si"
function Home() {
    const style = {
        borderRadius:'50%'
    }
    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-8">
                    <h1>Donia Elsayed Abd Elsabour</h1>
                    <div className="col-3 contacts d-flex justify-content-evenly m-auto pb-4 fs-3">
                        <a href="https://github.com/donia-elsayed"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/donia-elsayed/"><FaLinkedin/></a>
                        <a href="mailto:doniaelsayed272@gmail.com"><SiGmail/></a>
                        <a href="tel:01147001714"><FaPhoneSquareAlt/></a>
                    </div>
                    <p className="text-muted">Graduated from faculty of computer and information science,Ain Shams Univeristy.</p>
                    <p className="text-muted">I student in  Front-End Track at Information Technology Institute (ITI).</p>
                    <div className="my-skills">
                       <SiHtml5 className="fs-3"/>
                       <SiCss3 className="fs-3"/>
                       <SiJavascript className="fs-3"/>
                       <FaBootstrap className="fs-3"/>
                       <SiJquery className="fs-3"/>
                       <SiTypescript className="fs-3"/>
                       <SiSass className="fs-3"/>
                       <FaAngular className="fs-3"/>
                       <FaReact className="fs-3"/>
                       <SiRedux className="fs-3"/>
                       <FaGitSquare className="fs-3"/>
                    </div>
                </div>
                <div className="col-4">
                    <img src={myImg} alt="" className="w-100" style={style}/>
                </div>
            </div>
        </div>
    )
}
export default Home;
