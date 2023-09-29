import React from 'react';

const NutritionCard = ({icon, dataType, dataCard, id}) => {
    return (
        <div className='nutriCard' key={id}>
            <div className={`nutriCard__img-container nutriCard__img-${dataType}`}>
                <img src={icon} alt="Nutrition card" className="nutriCard__img"/>
            </div>
            <div className='nutriCard__desc'>
                <div className='nutriCard__desc-info'>{dataCard}</div>
                <div className='nutriCard__desc-name'>{dataType}</div>
            </div>
        </div>
    );
};

export default NutritionCard;