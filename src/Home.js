import React from 'react'

function Home(props) {
    return (
        <div>
            <br></br> Name : {props.name} <br></br> ID : {props.id} <br></br> Branch : {props.branch} 
        </div>
    )
}

export default Home
