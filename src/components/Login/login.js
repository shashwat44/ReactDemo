import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Login(props) {
  let history = useHistory();
  console.log(" props", props);
  const onSubmit = async (values) => {
    console.log(values, "values");
    props.login(values);

    // localStorage.setItem('AuthToken','abcde')
    // window.alert("LOGIN SUCCESS!");
    // history.push("/home");

    setTimeout(() => {
      console.log("after props", props);
      if (props.loginData) {
        localStorage.setItem("AuthToken", props.loginData.loginData.authToken);
        window.alert("LOGIN SUCCESS!");
        history.push("/home");
      }
    }, 2000);
  };

  // useEffect(()=>{
  //   console.log("after props",props);
  // })

  return (
    <div style={{ marginTop: "200px" }}>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                console.log(values, "values");
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }

                if (values.password && values.password.length < 4) {
                  errors.password = "Password must 8 characters long";
                }
                return errors;
              }}
              render={({
                submitError,
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="form-control"
                          {...input}
                          type="text"
                          placeholder="Email"
                        />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span style={{ color: "red" }}>
                            {meta.error || meta.submitError}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="form-control"
                          {...input}
                          type="password"
                          placeholder="Password"
                        />
                        {meta.error && meta.touched && (
                          <span style={{ color: "red" }}>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  {submitError && <div className="error">{submitError}</div>}
                  <div className="buttons">
                    <button
                      className="form-control btn btn-primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Log In
                    </button>
                  </div>
                </form>
              )}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
