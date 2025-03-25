// contact UI
import { useState } from "react";

const Contact = () =>  {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [ response, setResponse] = useState("");

    // hardcode the url
    const baseUrl = "https://portfolio-react-vite-backend.onrender.com/contact";

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // make a fetch request to the backend
    const handleSubmit = async (e)=> {
        e.preventDefault();
        setIsSubmitting(true);
        setResponse("");

        if (!formData.name || !formData.email || !formData.message) {
            setResponse("All fields are required.");
            setIsSubmitting(false);
            return;
        }

        try {
            const res =  await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formData), //send formData
            });
    
            const data = await res.json();
            setResponse(data.success ? data.success : data.error); //update response state

            if (data.success) {
                setFormData({ name: "", email: "", message: "" });
            }

        } catch (error) {
            setResponse("Failed to send Message");
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="container bg-dark pt-4 rounded shadow-lg" style={{maxHeight: "500px", maxWidth: "550px"}}
            id="contact">
           
            <form className="text-white" onSubmit={handleSubmit}>
                <div className="row">
                   <div>
                        <h5 className="mb-4 w-100 text-center">Contact Me</h5>
                   </div>
                    <div className="col-sm-12 d-flex flex-column pb-3">
                        <label htmlFor="name" id="nameRow" className="form-label">Name</label>
                        <input type="text" name="name" className="form-text form-control" value={formData.name} id="nameRow" onChange={handleChange}
                        disabled={isSubmitting}/>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label htmlFor="email" id="EmailRow" className="form-label">Email</label>
                        <input type="email" name="email" className="form-text form-control my-0"
                        value={formData.email} id="EmailRow" onChange={handleChange} disabled={isSubmitting}/>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label htmlFor="message" id="messageRow" className="form-label" >Message</label>
                        <textarea name="message" value={formData.message} className="form-control"
                        id="messageRow" rows={4} onChange={handleChange} disabled={isSubmitting}/>
                    </div>
                </div>
                <button className="btn btn-md text-white btn-success w-100 mt-2 mb-4">Send Message</button>
            </form>
            {response && alert(response)}
        </section>
    )
}

export default Contact;
