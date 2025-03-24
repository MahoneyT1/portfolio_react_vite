// contact UI

const Contact = () => {

    return (
        <section className="container bg-dark pt-4 rounded shadow-lg" style={{maxHeight: "500px", maxWidth: "550px"}}>
           
            <form className="text-white">
                <div className="row">
                   <div>
                        <h5 className="mb-4 w-100 text-center">Contact Me</h5>
                   </div>
                    <div className="col-sm-12 d-flex flex-column pb-3">
                        <label htmlFor="name" id="nameRow" className="form-label">Name</label>
                        <input type="text" className="form-text form-control" id="nameRow"/>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label htmlFor="Email" id="EmailRow" className="form-label">Email</label>
                        <input type="text" className="form-text form-control my-0" id="EmailRow" />
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label htmlFor="message" id="messageRow" className="form-label">Message</label>
                        <textarea className="form-control" id="messageRow" rows={4}/>
                    </div>
                </div>
                <button className="btn btn-md text-white btn-success w-100 mt-2 mb-4">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;