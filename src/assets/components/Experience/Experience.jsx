// timeline layout for Experience UI
import "./Experience.css"



const Experience = () => {

    return (
        <section className="container ">
            <div className="row d-md-6">

                <div className="text-white mt-5 d-md-flex justify-content-md-center position-md-absolute left-50">
                    <h5>Experience</h5>
                </div>

                <div className="col-sm-12 d-md-flex justify-content-center gap-md-3">

                    <div className="col-md-6 bg-primary mt-md-5 d-md-flex justify-content-md-center">
                        <div className=" timeline">
                            <div className="timeline-items">
                                <div className="timeline-bullet bg-success"></div>
                                <div className="timeline-content text-white">
                                    <h6 className="mb-0">Junior Software Engineer</h6>
                                    <small className="small-text mb-5"> 2023 - present</small>
                                    <p className="mt-3 text-white">
                                        and optimized backend services using Python,
                                        Flask, Django, Express.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div className="col-md-6 mt-md-5 d-md-flex justify-content-md-center">
                        <div className="timeline ">
                            <div className="timeline-items text-white">
                                <div className="timeline-bullet bg-success"></div>
                                    <div className="timeline-content">
                                    <h6 className="mb-0">Software Engineer</h6>
                                    <small className="small-text mt-2">2023 - 2025</small>
                                    <p className="mt-3">
                                        Improved the speed of fetching data from backend API
                                        my implementing Caching
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience;
