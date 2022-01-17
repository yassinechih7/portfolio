import React from 'react'

function SkillCard(props) {
    return (
        <div className='SkillCard'>
            <div className="skill-card-icon">props.icon</div>
            <div className="skill-card-title">props.title</div>
            <div className="skill-card-text">props.text</div>
        </div>
    )
}

export default SkillCard
