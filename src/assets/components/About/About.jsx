import Card from "../Card/Card";
import "./About.css"


const About = ()=> {
    const bodyText1 = "React, JavaScript, HTML, CSS, Tailwind, Bootstrap";
    const bodyText2 = "Django, Flask, Express, Python, node.js";
    const bodyText3 = "MySQL, MongoDB, Redis";



    return (
        <section className="container-fluid min-vh-50 min-vh-lg-100 w-100  mt-5 text-white bg-dark p-2"
            >

            <div className="row pe-0">
                <div className="col-sm-12  col-md-5 d-flex flex-column px-md-5">
                    <div className="">
                        <h1 className="fs-5 mt-5">About me</h1>
                        <p className="text-small ">
                            I'm a software engineer with a passion for building scalable web applications.
                            Graduate of ALX Africa Bootcamp, I combine technical expertise with creative
                            problem-solving to deliver robust solutions.
                        </p>
                    </div>
                   
                    <div className="d-flex gap-3 mt-4">
                        <div><i className="fa-brands fa-github"></i></div>
                        <div><i className="fa-brands fa-linkedin-in"></i></div>
                        <div className="text-white"><i className="fa-brands fa-whatsapp"></i></div>
                    </div>
                </div>

                
                <div className="col-md-7 pe-md-0 d-md-flex flex-wrap pe-lg-4 ">
                    <div className="col-md-6 p-2 ">
                        <Card className="" svg={<i className="fa-solid fa-code"></i>}
                        name={"Frontend"} body={bodyText1}/>
                    </div>

                    
                    <div className="col-md-6 p-2 ">
                        <Card className="w-100" svg={<i className="fa-solid fa-server"></i>}
                        name={"Backend"} body={bodyText2}
                        />
                    </div>  
            

                
                    <div className="col-md-6 p-2">
                        <Card svg={<i className="fa-solid fa-database"></i>}
                        name={"Database"} body={bodyText3}
                        />
                    </div>
               
                
                    <div className="col-md-6 p-2">
                        <Card svg={<i className="fa-solid fa-cloud"></i>}
                        name={"Devops"} body={bodyText2}
                        />
                    </div>

                </div>
             
                
            </div>
        </section>
    )
}

export default About;