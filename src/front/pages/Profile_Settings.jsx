import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import "/src/front/profile_styles.css";

export const Profile_Settings = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
    
    const [formData, setFormData] = useState({
        username: "",
        bio: "",
        height: "",
        weight: "",
        main_exercise: ""
    });
    const [image, setImage] = useState("https://images.icon-icons.com/3868/PNG/512/profile_circle_icon_242774.png");

    
    useEffect(() => {
        const loadUserData = async () => {
            
            console.log("Cargando datos del atleta desde el backend...");
           
        };
        loadUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log("Guardando datos en la DB...", formData);
        
        
        
        
        navigate("/profile"); 
    };

    return (
        <div className="settingsWrapper gap-5">
            <div className="singleCard">
                <h2 className="title">Información Personal</h2>
                <div className="avatarSection">
                    <div className="avatarContainer">
                        <img src={image} className="img" alt="Foto de Perfil" />
                    </div>
                    <input type="file" accept="image/*" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
                    <button className="btn btn-outline-danger btn-sm mt-2" onClick={() => fileInputRef.current.click()}>
                        <i className="fa-solid fa-camera me-2"></i> Cambiar Foto
                    </button>
                </div>

                
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label>Usuario</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Tu nombre de usuario" />
                    </div>
                    <div className="inputGroup">
                        <label>Biografía</label>
                        <textarea name="bio" rows="3" value={formData.bio} onChange={handleChange} placeholder="Algo sobre tus entrenamientos..."></textarea>
                    </div>
                    <hr className="divider" />
                    <button type="submit" className="saveBtn">Guardar Cambios</button>
                </form>
            </div>

            <div className="singleCard">
                <h2 className="title">Datos de Atleta</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label>Altura (cm)</label>
                        <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="180" />
                    </div>
                    <div className="inputGroup">
                        <label>Peso (kg)</label>
                        <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="85" />
                    </div>
                    <div className="inputGroup">
                        <label>Ejercicio principal</label>
                        <select className="form-select" name="main_exercise" value={formData.main_exercise} onChange={handleChange}>
                            <option value="">Selecciona una opción</option>
                            <option value="Clean">Clean</option>
                            <option value="Snatch">Snatch</option>
                            <option value="Deadlift">Deadlift</option>
                        </select>
                    </div>
                    <button type="submit" className="saveBtn">Actualizar Atleta</button>
                </form>
            </div>
        </div>
    );
};