import React from 'react';
import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png'
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';
import EmptyImg from '../images/empty.png';

const Card = ({ title, description, img, leftColor, rightColor }) => (
    <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56ccf2'}, ${rightColor || '#2f80ed'})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6 ">
                            <img src={img || EmptyImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
)

export default Card;