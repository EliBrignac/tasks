import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import eagles_logo from "./Philadelphia-Eagles-Logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#004C54" }}
            >
                UD CISC275 with React Hooks and TypeScript. Hello World
            </header>
            <h1>Eagles will Win the SuperBowl</h1>
            <Container>
                <Row>
                    <Col>
                        Players:
                        <ul>
                            <li>Jaylyn Hurts, QB, #1</li>
                            <li>Jason Kelce, C, #62</li>
                            <li>Devante Smith, WR, #6</li>
                            <li>Big play Slay, CB, #2</li>
                        </ul>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                background: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src={eagles_logo}
                            alt="The Eagles Logo"
                            width="200px"
                            height="150px"
                        />
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                background: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. ELI BRIGNAC
            </p>
        </div>
    );
}

export default App;
