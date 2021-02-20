import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import ErrorMessage from '../common/ErrorMessage';
import CharacterPage from '../CharacterPage';

export default class App extends Component {
    state = {
        error: false
    };

    render() {
        if (this.state.error) {
            return <ErrorMessage />;
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            <RandomChar />
                        </Col>
                    </Row>
                    <CharacterPage />
                </Container>
            </>
        );
    }
}
