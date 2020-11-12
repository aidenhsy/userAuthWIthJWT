import React, { useState, useEffect } from "react";

//Redux
import { getProfile, updateProfile } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_PROFILE_UPDATE_RESET,
  USER_PROFILE_UPDATE_RESET,
} from "../redux/constants";

//Presentational
import { Button, Col, Form, Row } from "react-bootstrap";

const ProfileScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userProfile = useSelector((state) => state.userProfile);
  const { user, loading, error } = userProfile;
  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const { success } = userProfileUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.email || success) {
        dispatch({ type: USER_PROFILE_UPDATE_RESET });
        dispatch(getProfile("profile"));
      } else {
        setEmail(user.email);
      }
    }
  }, [history, user, userInfo, dispatch, success]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ _id: user._id, email, password }));
  };
  return (
    <Row>
      <Col md={3}>
        <h1>Profile</h1>
        {success && <h2>success</h2>}
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Update</Button>
        </Form>
      </Col>
      <Col md={9}>
        <h1>Cart</h1>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
