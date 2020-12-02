import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const JumboNav = () => {
    const divStyle = {
        color: 'white',
        backgroundColor: "black"

    };
    return (
        <div >
            <Jumbotron style={divStyle} fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default JumboNav
