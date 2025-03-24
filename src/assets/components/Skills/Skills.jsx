// skills bars and Experience Level UI
import ProgressBar from "../ProgressBar/ProgressBar";

const Skills = () => {

    return (
    // UI Component 
    <section className="container-fluid bg-dark text-white vh-50 mt-5 px-md-4">
        <div className="px-md-4">
            <div className="row">
                <div className="mt-5"><h5>Skills & Experience</h5></div>
                
                <div className="col-sm-12 mt-2 w-100 text-white">
                    <div className="mt-3">
                        <div className="mb-5 p-0">
                            <h6>Frontend</h6>
                        </div>
                        <div className="d-flex w-100 gap-3 text-warning w-100">
                            <div><i className="fa-brands fa-react text-blue"></i></div>
                            <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                        </div>

                        <div className="d-flex w-100 gap-3 text-warning">
                            <div><i className="fa-brands fa-js"></i></div>
                            <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                        </div>

                        <div className="d-flex w-100 gap-3 text-warning">
                            <div><i className="fa-brands fa-html5"></i></div>
                            <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                        </div>

                        <div className="d-flex w-100 gap-3 text-warning">
                            <div><i className="fa-brands fa-css3"></i></div>
                            <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                        </div>
              

                        <div className="col-sm-12">
                            <div className="mt-5 mb-5">
                                <h6>Backend</h6>
                            </div>
                            <div className="d-flex w-100 gap-3 text-warning">
                                <div><i className="fa-brands fa-node-js"></i></div>
                                <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                            </div>

                            <div className="d-flex w-100 gap-3 text-warning">
                                <div><i className="fa-brands fa-python"></i></div>
                                <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                            </div>

                            <div className="d-flex w-100 gap-3 text-warning">
                                <div><i className="fa-brands fa-python"></i></div>
                                <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                            </div>

                            <div className="d-flex w-100 gap-3 text-warning">
                                <div><i className="fa-brands fa-c"></i></div>
                                <div className="mb-4 w-75"><ProgressBar valueNow={85}/></div>
                            </div>                    
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        
    </section>
    )
}

export default Skills;