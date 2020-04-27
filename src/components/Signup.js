import React from "react";

const Signup = () => {

    return (
        <form>
            <fieldset>
                <legend className="text-center">Don't have an account?</legend>
                <div className="form-group row"></div>

                <div className="form-group">
                    <input type="text" className="form-control radius-5px" id="exampleInputEmail1" placeholder="Username ..."></input>
                </div>
                
                <div className="form-group">
                    <input type="text" className="form-control radius-5px" id="exampleInputEmail1" placeholder="Full name ..."></input>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control radius-5px" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address ..."></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control radius-5px" id="exampleInputPassword1" placeholder="Password ..."></input>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control radius-5px" id="exampleInputPassword1" placeholder="Confirm password ..."></input>
                </div>
                
                <button type="submit" className="btn btn-primary radius-5px btn-block">Sign Up</button>
            </fieldset>
        </form>
    )
}

export default Signup;

// <Container>
//           <Form.Label>Don't have an account?</Form.Label>
//           <br />
//           <br />
//           <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
//             <Form.Group >
//               <Form.Control
//                 required
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 You must enter a username.
//             </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 required
//                 type="text"
//                 name="first_name"
//                 placeholder="First name"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.first_name}
//               />
//               <Form.Control.Feedback type="invalid">
//                 You must enter a first name.
//             </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 required
//                 type="text"
//                 name="last_name"
//                 placeholder="Last name"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.last_name}
//               />
//             </Form.Group>
//             <Form.Control.Feedback type="invalid">
//               You must enter a last name.
//             </Form.Control.Feedback>
//             <Form.Group>
//               <Form.Control
//                 required
//                 type="text"
//                 name="email"
//                 placeholder="Enter email"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.email}
//               />
//               <Form.Control.Feedback type="invalid">
//                 You must enter an email.
//             </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 required
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.password}
//               />
//               <Form.Control.Feedback type="invalid">
//                 You must enter a password.
//             </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 required
//                 type="password"
//                 name="password_confirmation"
//                 placeholder="Confirm password"
//                 onChange={event => this.handleChange(event)}
//                 value={this.state.fields.password_confirmation}
//               />
//               <Form.Control.Feedback type="invalid">
//                 You must confirm your password.
//             </Form.Control.Feedback>
//             {this.state.error ? <Form.Text> {this.state.error} </Form.Text> : null}
//             </Form.Group>
//             <Form.Group>
//               <Button variant="secondary" type="submit" block>
//                 Create account
//               </Button>
//             </Form.Group>
//           </Form>
//         </Container>