import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

	return (
		<footer className="py-5 mt-5" style={{ background: 'linear-gradient(to bottom, transparent, #050505)' }}>
			<div className="container">
				{/* Línea de separación con un toque rojo neón */}
				<div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #dc3545, transparent)', opacity: 0.3 }} className="mb-5"></div>

				<div className="row g-4 text-center text-md-start">
					<div className="col-md-4">
						<h5 className="font-oswald text-white mb-4">SOBRE NOSOTROS</h5>
						<p className="text-secondary small lh-lg">
							Somos un equipo apasionado por el CrossFit. Hemos diseñado este generador para que solo te preocupes de una cosa: **superar tu marca.**
						</p>
						<Link
							to="/Aboutus"
							className="btn-outline-custom d-inline-block text-decoration-none py-2 px-4 mt-2"
							style={{ fontSize: '0.8rem' }}
						>
							CONÓCENOS
						</Link>
					</div>

					<div className="col-md-4 text-md-center">
						<h5 className="font-oswald text-white mb-4">CONTACTO</h5>
						<div className="text-secondary small">
							<p className="mb-1"><i className="fas fa-envelope text-danger me-2"></i> info@wodgenerator.com</p>
							<p><i className="fas fa-map-marker-alt text-danger me-2"></i> Madrid, Spain</p>
						</div>
					</div>

					<div className="col-md-4 text-md-end">
						<h5 className="font-oswald text-white mb-4">SÍGUENOS</h5>
						<div className="d-flex justify-content-center justify-content-md-end gap-3">
							{/* Iconos con círculo sutil */}
							<a href="#" className="social-pill"><i className="fab fa-instagram"></i></a>
							<a href="#" className="social-pill"><i className="fab fa-github"></i></a>
							<a href="#" className="social-pill"><i className="fab fa-linkedin"></i></a>
						</div>
					</div>
				</div>

				<div className="mt-5 pt-4 text-center border-top border-white border-opacity-10">
					<p className="text-secondary extra-small opacity-50">
						© 2024 WOD GENERATOR — ELITE PROGRAMMING — GRUPO 4
					</p>
				</div>
			</div>
		</footer>
	);
};
