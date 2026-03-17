import React from "react";
import { useEffect } from "react";

export function Aboutus() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-vh-100 py-5 mt-5">
            <div className="container text-white mt-4">
                
                
                <div className="text-center mb-5 pb-3">
                    <h1 className="titulo-pro display-3 fw-bold">NUESTRO <span className="text-danger">EQUIPO</span></h1>
                    <div className="divider-glow mx-auto" style={{ width: '150px' }}></div>
                </div>

                <div className="row justify-content-center g-4">
                    
                    
                    

                   
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-card p-4 text-center h-100">
                            <div className="team-img-wrapper mb-4 mx-auto">
                                <img 
                                    src="public/IMAGES/Foto_Documento (1).png" 
                                    alt="Pablo Aristizabal"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="font-oswald text-uppercase text-white mb-2">Pablo Aristizabal</h4>
                                <h6 className="text-danger mb-3 fw-bold extra-small">Full Stack Developer</h6>
                                <p className="small text-secondary lh-lg opacity-75">
                                    Responsable de la base de datos y la lógica de Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-card p-4 text-center h-100">
                            <div className="team-img-wrapper mb-4 mx-auto">
                                <img 
                                    src="https://avatars.githubusercontent.com/u/234033046?v=4" 
                                    alt="Marco Cebrian"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="font-oswald text-uppercase text-white mb-2">Marco Cebrian</h4>
                                <h6 className="text-danger mb-3 fw-bold extra-small">Full Stack Developer</h6>
                                <p className="small text-secondary lh-lg opacity-75">
                                    Encargado de la parte técnica y el diseño de la aplicación.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-card p-4 text-center h-100">
                            <div className="team-img-wrapper mb-4 mx-auto">
                                <img 
                                    src="https://avatars.githubusercontent.com/u/223447640?v=4&size=64" 
                                    alt="Manuel Francisco"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="font-oswald text-uppercase text-white mb-2">Manuel Francisco</h4>
                                <h6 className="text-danger mb-3 fw-bold extra-small">Full Stack Developer</h6>
                                <p className="small text-secondary lh-lg opacity-75">
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