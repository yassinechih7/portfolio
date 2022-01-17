import React from 'react'

function SkillCard(props) {
    return (
        <div className="SkillCard">
            <div className="card-image"><img src={props.img} alt="" /></div>
            <div className="card-title">props.title</div>
            <div className="card-text">
            props.text
            </div>
        </div>
    )
}

export default SkillCard
