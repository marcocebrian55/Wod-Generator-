import { useState } from "react";
import { registerUser } from "../services/backendServices";
import logo from "../assets/img/Logo-png.png";
import "../styles/auth.css";

export const RegisterModal = ({ show, onClose, openLogin }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const response = await registerUser({
            email: formData.email,
            password: formData.password
        });

        if (response.error) {

            alert(response.error);

        } else {

            alert("Usuario creado correctamente");

            onClose();

        }
    };

    if (!show) return null;

    return (

        <div className="auth-overlay">

            <div className="auth-card auth-card-register">

                <button className="auth-close" onClick={onClose}>
                    ×
                </button>

                <div className="auth-top-bar"></div>

                <img src={logo} className="auth-logo" />

                <div className="auth-body">

                    <h3 className="auth-title">
                        Regístrate
                    </h3>

                    <p className="text-center mb-3">
                        Crea una Cuenta
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="auth-input-group">

                            <i className="fas fa-user auth-icon"></i>

                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre Completo"
                                className="form-control auth-input"
                                onChange={handleChange}
                            />

                        </div>

                        <div className="auth-input-group">

                            <i className="fas fa-envelope auth-icon"></i>

                            <input
                                type="email"
                                name="email"
                                placeholder="Correo Electrónico"
                                className="form-control auth-input"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="auth-input-group">

                            <i className="fas fa-lock auth-icon"></i>

                            <input
                                type="password"
                                name="password"
                                placeholder="Crear Contraseña"
                                className="form-control auth-input"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="auth-input-group">

                            <i className="fas fa-lock auth-icon"></i>

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmar Contraseña"
                                className="form-control auth-input"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button className="btn auth-btn">
                            Crear Cuenta
                        </button>

                    </form>

                    <p className="text-center mt-3">

                        ¿Ya tienes una cuenta?
                        <br />

                        <span
                            className="auth-link"
                            onClick={openLogin}
                        >
                            Iniciar Sesión
                        </span>

                    </p>

                    

                </div>

            </div>

        </div>

    );
};