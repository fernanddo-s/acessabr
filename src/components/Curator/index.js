import React from "react";
import "./style.scss"
import curatorPhoto from "../../images/curator-photo.jpg"

function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto do curador Fernando Sousa" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Fernando Sousa</h3>
                    <h6>Curador</h6>
                </div>

                <p>Aspirante a programador desde 2020, experiêmcia com as linguagens C, Java, C++ e JavaScript,  assim como  em HTML e CSS, no quesito banco de dados tem conhecimento em Postgres e MySQL, além disso está iniciando no uso de frameworks como Spring e React</p>
            </div>
        </div>
    );
}

export default CuratorItem;