import React from "react";

const Login = () => {

    return (
        <form>
            <fieldset>
                <legend className="text-center">Have an account?</legend>
                <div className="form-group row"></div>
                
                <div className="form-group">
                    <input type="text" className="form-control radius-5px" id="exampleInputEmail1" placeholder="Username ..."></input>
                </div>
                
                <div className="form-group">
                    <input type="password" className="form-control radius-5px" id="exampleInputPassword1" placeholder="Password ..."></input>
                </div>
                
                <button type="submit" className="btn btn-primary radius-5px btn-block">Log in</button>
            </fieldset>
        </form>
    )
}

export default Login;



{/* <Container>
          <Form.Label>Have an account?</Form.Label>
          <br />
          <br />
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                label="username"
                placeholder="Username"
                onChange={event => this.handleUsernameChange(event)}
                value={this.state.username}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a username.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={event => this.handlePasswordChange(event)}
                value={this.state.password}
              />
              <Form.Control.Feedback type="invalid">
                Enter your password.
            </Form.Control.Feedback>
              {this.state.error ? <Form.Text> {this.state.error} </Form.Text> : null}
            </Form.Group>
            <Button variant="secondary" type="submit" block>
              Log in
          </Button>
          </Form>
        </Container> */}
