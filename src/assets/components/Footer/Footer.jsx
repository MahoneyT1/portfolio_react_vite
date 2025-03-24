// footer bar

const Footer = () => {

    return (
        <footer className="container-fluid " style={{height: "80px"}}>
            <div className="container">
                <div className="footer-text text-white text-center mt-2">
                    <p><small>© 2025 Ifeanyi.dev. All rights
                        reserved.</small>
                    </p>
                </div>

                <div className="footer-icons text-white text-center d-flexabout-height
                    justify-content-start gap-3">
                    <i className="fa-brands fa-github mx-3"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-whatsapp mx-3 "></i>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;