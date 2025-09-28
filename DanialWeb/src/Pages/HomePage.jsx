import Card from "../components/Projectcard"
import gImage from "../Images/gweb.png"; 
import eImage from "../Images/embedded.webp"; 
import wImage from "../Images/web.jpeg";
import rImage from "../Images/react.jpg";
import backgroundImage from '../Images/banner.jpg';
import '../css/Homepage.css'
function Home(){
    const projects = [
         {id:1,title:"ESP32&Python",link:"https://github.com/DanialAyamn/ESP32/blob/main/.gitignore",image:eImage},
         {id:2,title:"React",link:"https://github.com/DanialAyamn/ReactWeb",image:rImage},
         {id:3,title:"BraudeFit",link:"https://github.com/DanialAyamn/DanialProjects",image:wImage},
         {id:4,title:"Github",link:"https://github.com/DanialAyamn/DanialProjects",image:gImage}
    ]
    return <div className="Home">
    <div className="home-page-cards">
            <section className="home-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Danial Abu Yamn</h1>
                <p>3rd Year Software Engineering Student</p>
            </section>
            <div className="home-page-title">
                <h2>My Projects</h2>
            </div>
             <div className="home-page-cards">
                {projects.map((project) => (
                    <div key={project.id} className="project-card-wrapper">
                        <h3 className="project-card-title">{project.title}</h3>
                        <Card project={project} />
                    </div>
                ))}
            </div>
        </div>
    </div>


   
}
export default Home