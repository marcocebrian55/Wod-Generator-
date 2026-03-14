import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer bg-black pt-5 pb-3 ">
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-4 mb-3">
					<div className="card h10 bg-dark text-white border-secondary tarjeta-footer">
						<div className="card-body d-flex flex-column">
							<h5 className="card-title text-danger font-oswald ">SOBRE NOSOTROS</h5>
							<p className="card-text small text-secondary">Somos un grupo de programadores junior el cual ha
								desarrollado este Wod's generator para llevar tus entrenamientos a otro nivel.</p>
							<Link to={"/aboutus"} className="btn btn-outline-danger btn-sm">
								CONOCENOS
							</Link>


						</div>

					</div>


				</div>

			
				<div className="col-12 col-md-4 mb-3">
					<div className="card h10 bg-dark text-white border-secondary tarjeta-footer">
						<div className="card-body d-flex flex-column">
							<h5 className="card-title text-danger font-oswald ">Contacto</h5>
							<p className="small mb-1"><i className="fas fa-map-marker-alt text-danger me-2"></i> Calle del Box, 12, Madrid</p>
                            <p className="small mb-1"><i className="fas fa-envelope text-danger me-2"></i> info@wodgenerator.com</p>
                            <p className="small"><i className="fas fa-phone text-danger me-2"></i> +34 600 000 000</p>

						</div>

					</div>


				</div>

			
			
				<div className="col-12 col-md-4 mb-3">
					<div className="card h10 bg-dark text-white border-secondary tarjeta-footer">
						<div className="card-body d-flex flex-column">
							<h5 className="card-title text-danger font-oswald ">RSS</h5>
							<div className="d-flex justify-content-around">
                                    
                                    <a href="#" className="text-white fs-3 icono-footer"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-white fs-3 icono-footer"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="text-white fs-3 icono-footer"><i className="fab fa-github"></i></a>
                                    <a href="#" className="text-white fs-3 icono-footer"><i className="fab fa-linkedin"></i></a>
                                </div>


						</div>

					</div>


				</div>

			</div>
			<div className="text-center mt-4 border-top border-secondary pt-3">
                    <p className="text-secondary small mb-0">
                        © 2024 WOD GENERATOR - Proyecto Full Stack - Grupo 4
                    </p>
                </div>

		</div>
	</footer>
);
