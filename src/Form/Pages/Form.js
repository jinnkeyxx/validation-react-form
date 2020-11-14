import React from 'react'
import LayoutComponent from '../Component/Layout'
import {Form , Button} from 'react-bootstrap'
const FormPage = (props) => {

    return(
        <LayoutComponent>
             <Form onSubmit={props.submit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  placeholder="Enter email" name={props.nameEmail} defaultValue={props.email} onChange={props.change}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={props.namePassword} defaultValue={props.password} onChange={props.change}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </LayoutComponent>

    )
}
export default React.memo(FormPage)