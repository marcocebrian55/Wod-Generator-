import { useState } from "react";
import { loginUser } from "../services/backendServices";
import { useNavigate } from "react-router-dom";

export const LoginModal = ({ show, onClose }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await loginUser(formData);

        if (response.token) {

            localStorage.setItem("token", response.token);

            alert("Login correcto");

            onClose();

            navigate("/generator");

        } else {

            alert("Email o contraseña incorrectos");

        }
    };

    if (!show) return null;

    return (
        <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-0">

                    <div className="modal-header border-0">
                        <h4 className="modal-title fw-bold">
                            Iniciar sesión
                        </h4>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="modal-body px-4">

                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="ejemplo@email.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Contraseña
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Introduce tu contraseña"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="modal-footer border-0 px-4 pb-4">

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="btn btn-dark px-4"
                            >
                                Entrar
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};