
import React from "react"
import { Jumbotron, Button } from 'react-bootstrap';

function Home() {

    return(
        <div>
            <Jumbotron className="ml-5 mr-5 bg-light">
                <h1>Time is money. Save both.</h1>
                <p>
                    The only corporate card and spend management platform 
                    that automates your accounting and lowers your bills.
                </p>
                <p>
                    <Button variant="outline-dark">Learn more</Button>
                </p>
            </Jumbotron>
            <Jumbotron className="ml-5 mr-5 bg-light">
                <h1>Time is money. Save both.</h1>
                <p>
                    The only corporate card and spend management platform 
                    that automates your accounting and lowers your bills.
                </p>
                <p>
                    <Button variant="outline-dark">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
        
    )
}

export default Home;