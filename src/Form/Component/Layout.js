import React from 'react'
import HeaderComponet from './Header'
import FooterComponet from './Footer'
import {Container , Row , Col} from 'react-bootstrap'
const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponet/>
            <Container>
                <Row className="justify-content-md-center">
                <Col md="6">
                    {props.children}
                </Col>
                </Row>
            </Container>
            <FooterComponet/>
        </>
    )
}
export default React.memo(LayoutComponent)
