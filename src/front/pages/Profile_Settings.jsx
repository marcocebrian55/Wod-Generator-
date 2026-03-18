import { Link } from "react-router-dom";
import "/src/front/profile_styles.css";
import React, { useState, useRef } from 'react';

export const Profile_Settings = () => {

    const [image, setImage] = useState("https://images.icon-icons.com/3868/PNG/512/profile_circle_icon_242774.png");

    // 2. Referencia para conectar el botón con el input oculto
    const fileInputRef = useRef(null);

    const handleEditPhotoClick = () => {
        // Al hacer clic en el botón visible, activamos el input oculto
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Creamos una URL temporal para mostrar la imagen seleccionada
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);

            // Aquí podrías enviar el 'file' a tu backend o Global State
            console.log("Archivo listo para subir:", file);
        }
    }

    return (
        <div className="settingsWrapper gap-5">
            <div className="singleCard">
                <h2 className="title">Información Personal</h2>

                {/* SECCIÓN DE FOTO */}
                <div className="avatarSection">
                    {/* Contenedor de la foto */}
                    <div className="avatarContainer">
                        <img src={image} className="img" alt="Foto de Perfil" />
                    </div>

                    {/* Input de tipo file OCULTO */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />

                    {/* Tu botón personalizado que dispara la acción */}
                    <button
                        className="btn btn-outline-danger btn-sm mt-2"
                        onClick={handleEditPhotoClick}
                    >
                        <i className="fa-solid fa-camera me-2"></i>
                        Cambiar Foto
                    </button>
                </div>

                {/* FORMULARIO ÚNICO */}
                <form className="form">
                    <div className="inputGroup">
                        <label>Usuario</label>
                        <input type="text" placeholder="Tu nombre de usuario" />
                    </div>

                    <div className="inputGroup">
                        <label>Biografía</label>
                        <textarea
                            rows="3"
                            placeholder="Algo sobre tus entrenamientos..."
                        ></textarea>
                    </div>

                    <hr className="divider" />

                    <div className="inputGroup">
                        <label>Nueva Contraseña</label>
                        <input type="password" placeholder="Mínimo 8 caracteres" />
                    </div>
                    <Link to="/profile" className="cancelBtn">
                        <button type="submit" className="saveBtn">
                            Guardar
                        </button>
                    </Link>
                </form>
            </div>

            <div className="singleCard">
                <h2 className="title">Datos de atleta</h2>
                {/* FORMULARIO ÚNICO */}
                <form className="form">
                    <div className="inputGroup">
                        <label>Altura</label>
                        <input type="text" placeholder="Tu altura en cm" />
                    </div>

                    <div className="inputGroup">
                        <label>Peso</label>
                        <input type="text" placeholder="Tu peso en kg" />
                    </div>

                    <div className="inputGroup">
                        <label>Ejercicio principal</label>
                    <select className="form-select" aria-label="Default select example" placeholder="Elige tu ejercicio principal">
                        <option selected> Selecciona una opción </option>
                        <option value="1">Clean</option>
                        <option value="2">Snatch</option>
                        <option value="3">Deadlift</option>
                    </select>
                    </div>
                    

                    <div className="inputGroup">
                        <label>Gimnasio</label>
                        <input type="text" placeholder="¿Dónde entrenas?" />
                    </div>

                    <Link to="/profile" className="cancelBtn">
                        <button type="submit" className="saveBtn">
                            Guardar todo
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}