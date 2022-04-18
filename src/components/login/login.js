import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { Form, Button, Checkbox,  Input, Alert } from "antd";
import { Card } from 'antd';
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate();
    // function handleClick() {
    //     history.push("/register");
    //   }


    const [ user, setUser] = useState({
        email: "",
        password: "",
       })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
          ...user,
          [name]: value
        })
      }

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
   const login = () => {
       axios.post("http://localhost:1012/login", user)
       .then(res => alert(res.data))
   }
       
  return (
    <div className='App'>
    {console.log("User", user)}
    <header className='App-header'>
    <Card
    hoverable
    style={{ width: 500 , color:"red" }}
    className = "gog"
    
  > 
  <h1>Login</h1>
     <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     


     <Form.Item
        label="Email"
        name="email" value={ user.email } 
        rules={[
          {
            required: true,
            message: 'Email',
          },
        ]}
       
      >
        <Input  name="email" value={ user.email }  onChange={ handleChange }/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password" value={ user.password }
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
        <Input.Password  name="password" value={ user.password } onChange={ handleChange }/>
      </Form.Item>

     
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={ login }>
          Login
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Form.Item>
    </Form>
  </Card>,
   
    </header>
    </div>
  )
}

export default Login