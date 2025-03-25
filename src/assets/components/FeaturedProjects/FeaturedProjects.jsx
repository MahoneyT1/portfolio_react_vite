import ProjectCard from "../ProjectCard/ProjectCard";
const imageUrl = "/images/pizza.PNG";



const FeaturedProject = ()=> {


    return (
        <section className="bg-dark mt-5 w-100 min-vh-80 d-flex flex-column justify-content-md-around p-0 "
            id="projects">
            <div className="mb-3 text-white px-md-2 px-lg-5">
                <h5 className="mb-4 mx-lg-0">Featured Projects</h5>
            </div>

            <div className="container w-100 px-lg-0">
                <div className="row">
                    <div className="col-sm-12 col-md-12 d-md-flex gap-md-3 p-md-0 text-white">
                        <div className="shadow-sm  rounded max-w-75vw mb-3">
                            <ProjectCard body={"Full-stack e-commerce solution with real-time inventory management"}
                            title={"E commerce website"}
                            links={["React", "Django", "Redis"]}
                            imageCard={imageUrl}
                            />
                        </div>

                        <div className="max-w-75vw text mb-3">
                            <ProjectCard body={"Full-stack e-commerce solution with real-time inventory management"}
                            title={"E commerce website"}
                            links={["React", "Django", "Redis"]}
                            imageCard={imageUrl}
                            />
                        </div>

                        <div className=" mb-3">
                            <ProjectCard body={"Full-stack e-commerce solution with real-time inventory management"}
                                title={"E commerce website"}
                                links={["React", "Django", "Redis"]}
                                imageCard={imageUrl}
                            />
                        </div>

                    </div>    
                </div>
            </div>       
        </section>
    )
}

export default FeaturedProject;