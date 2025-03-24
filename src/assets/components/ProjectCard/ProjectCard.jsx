import "./ProjectCard.css"

const ProjectCard = ({imageCard, title, body, links, demoLink, codeLink})=> {


    return (
        <div className="rounded-2 shadow-lg shadow-shine ">
            <div className="">
                <img className="w-100 " src={imageCard} alt="image-card" />
            </div>     

            <div className="mt-3 mx-2">
                <h6>{title}</h6>
                <p style={{fontSize: "12px"}}>{body}</p>

                <div className="d-flex gap-2">
                    {links.map((link, index)=> ( 
                        <div className='rounded-5 text-center bg-secondary'
                            style={{width: "60px", fontSize: "12px"}}
                            key={index}>{link}
                        </div>
                    ))}
                </div>
                <div className="container d-flex justify-content-lg-start gap-3
                    mt-3 text-center p-0 ">
                        <div>
                            <a className="text-decoration-none fs-6 text-lowercase text-success" href={demoLink}>
                                <i className="fa-solid fa-link text-success"></i> <span className="text-sucess">Demo </span>
                            </a>

                            <a className="w-25 text-decoration-none fs-6 text-lowercase shadow-lg rounded text-success" href={codeLink}>
                                <i className="fa-brands fa-github ms-1"></i> Code
                            </a>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default ProjectCard;