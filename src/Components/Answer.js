import React from 'react'

function Answer(props) {
    return (
        <div>
            <div style={{fontSize:'200px'}}>{props.answer}</div>
            <br/>
            <div onClick={()=>window.location.reload(false)} style={{cursor:'pointer'}}>Try again</div>
        </div>
    )
}

export default Answer

