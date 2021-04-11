import React from 'react';
import addButton from '../images/add.png'
import './styles/AddButton.css';
import { Link } from 'react-router-dom';

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={addButton} className="Fitness-Add"/>
    </Link>
)

export default AddButton;