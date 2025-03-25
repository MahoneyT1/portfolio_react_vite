import Button from '../Button/Button.jsx';
import "./HeroSection.css"
const heroImage = '/images/image.png'
import { useNavigate } from 'react-router-dom';


const HeroSection = ()=> {

    const navigate = useNavigate();

    // the get in touch button navigates to the contact me section
    const handleGetInTouch = (e) => {
        e.preventDefault();

        const section = document.querySelector("#contact");
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
            navigate("#contact", {replace: true});
            
        };
    };

    // handle the view my works button
    const viewMyWorks = (e)=> {
        e.preventDefault();

        const projectSection = document.querySelector("#projects");
        if (projectSection) {
            projectSection.scrollIntoView({behavior: "smooth"});
            navigate("#projects", {replace: true});
        };
    };

    return (
        <section className='container bg-primary min-h-100 '>
            <div className="row d-flex vh-50
                justify-content-center
                align-items-center flex-column
                flex-md-row justify-content-md-between
                gap-md-5">

                <div className="col-sm-12 col-md-4 
                    col-lg-3 col-xl-3 col-xxl-3
                    flex-md-row bg-primary d-flex
                    position-relative justify-content-center
                    align-content-center
                    justify-content-md-start"
                    >
                    
                    {/* Hero image section */}
                    <div className="bg-primary border border-success mt-md-0 
                        d-flex justify-content-center
                        position-relative align-content-center h-md-100 w-md-100 rotateHeroImage"
                        style={{ borderRadius: "50%", overflow: "hidden", height: "200px", maxHeight: "250px",
                        width: "190px", maxWidth: "250px" }}> 

                        <img src={heroImage} alt="hero-image"
                            style={{ height: "260px", width: "100%",
                            objectFit: "cover", position: "absolute"}}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-8 
     text-white d-flex flex-column align-items-lg-end text-center text-lg-end mt-5 ms-lg-auto">

                    <h6 className='fs-3 opacity-100'> Hi, I'm feanyi Victor, <span className='text-success'>A Full-Stack Developer.</span> </h6>
                    <h1> <span className="fs-4 text-success"> Creative Solution.</span></h1>
                    
                    <p className="mt-3">Building scalable applications that solve real-world problems.</p>

                    <div className='w-auto d-flex flex-row justify-content-center 
                        align-items-center mt-3 gap-3 gap-md-2 gap-lg-3 '>
                        <Button btnName={"View my Work"} color={"success"} 
                        onClick={viewMyWorks}/> 


                        <Button onClick={handleGetInTouch}
                        btnName={"Get in touch"} color={"primary"}
                        />
        
                    </div>
                </div>


            </div>
        </section>
    )
}

export default HeroSection;