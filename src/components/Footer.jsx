const Footer = () => {
    return(
        <>
            <div id="footer_id" className="container-fluid bg-dark text-light text-center">
                <p className="py-1 mb-0">
                    <a href="mailto:gabriel.cespedes@usach.cl" target="_blank" rel="noopener noreferrer">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x text-white"></i>
                            <i class="fa fa-envelope fa-stack-1x fa-inverse text-dark"></i>
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-cespedes-alarcon" target="_blank">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x text-white"></i>
                            <i class="fa fa-linkedin fa-stack-1x fa-inverse text-dark"></i>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/user/gabrielcespedesalarc/playlists" target="_blank">
                        <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-white"></i>
                        <i class="fa fa-youtube fa-stack-1x fa-inverse text-dark"></i>
                    </span>
                </a>
                </p>
            </div>
        </>
    )
}

export default Footer;