import React from "react";

export function Aboutus() {
    return (
        <div className="bg-black min-vh-100 py-5">
            <div className="container mt-5 text-white">
                
                
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold font-oswald text-uppercase">
                        Nuestro Equipo
                    </h2>
                    <hr className="border-danger border-2 w-25 mx-auto" />
                </div>

                <div className="row justify-content-center">
                    
                   
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark border-secondary h-100 p-3 text-center">
                            <img 
                                src="https://avatars.githubusercontent.com/u/234033046?v=4" 
                                className="rounded-circle mx-auto mt-3" 
                                style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid #dc3545" }}
                                alt="Atleta 1"
                            />
                            <div className="card-body text-white">
                                <h4 className="card-title font-oswald text-uppercase">Marco Cebrian</h4>
                                <h6 className="text-danger mb-3">Full Stack Developer</h6>
                                <p className="small text-secondary">
                                    Encargado de la parte técnica y el diseño de la aplicación.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark border-secondary h-100 p-3 text-center">
                            <img 
                                src="https://avatars.githubusercontent.com/u/211037302?v=4&size=64" 
                                className="rounded-circle mx-auto mt-3" 
                                style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid #dc3545" }}
                                alt="Atleta 2"
                            />
                            <div className="card-body text-white">
                                <h4 className="card-title font-oswald text-uppercase">Pablo Aristizabal</h4>
                                <h6 className="text-danger mb-3">Full Stack Developer</h6>
                                <p className="small text-secondary">
                                    Responsable de la base de datos y la lógica de Python.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark border-secondary h-100 p-3 text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                className="rounded-circle mx-auto mt-3" 
                                style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid #dc3545" }}
                                alt="Atleta 3"
                            />
                            <div className="card-body text-white">
                                <h4 className="card-title font-oswald text-uppercase">Manuel Francisco</h4>
                                <h6 className="text-danger mb-3">Full Stack Developer</h6>
                                <p className="small text-secondary">
                                    Especialista en estilos y componentes de React.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};