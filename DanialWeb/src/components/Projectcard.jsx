
function Card({project}){
    function onimgclick(){
        window.open(project.link, "_blank")
    }
    return <div className="pcard">
        <div className="project-image">
           <img src={project.image} alt={project.title} onClick={onimgclick}/> 
        </div>
    </div>
}
export default Card