import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { Form, Button, Checkbox,  Input } from "antd";
import { Card } from 'antd';
import axios from "axios";



const Register = () => {
  const navigate = useNavigate();
  const [ user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword:""
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


      const register = () => {
        const { name, email, phone,  password , confirmPassword} = user

        if( name && email && phone && password && (password === confirmPassword)){
          axios.post("http://localhost:1012/signup", user)
          .then( res => console.log(res))
        }else {
          alert("invalid post")
        }
       
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
  <h1>Register</h1>
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
      <Form.Item type="text" name="name" value={ user.name }  label="Name" rules={[{ required: true }]} >
        <Input name="name" value={ user.name } onChange={ handleChange }/>
      </Form.Item>


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
        type="number"
        label="Phone"
        name="phone" value={ user.phone }
        rules={[
          {
            required: true,
            message: 'Please Enter your number',
          },
        ]}
       
      >
        <Input  name="phone" value={ user.phone }  onChange={ handleChange }/>
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
        label="Confirm Password"
        name="confirmPassword" value={ user.confirmPassword } 
        rules={[
          {
            required: true,
            message: 'Please put same password!',
          },
        ]}
       
      >
        <Input.Password  name="confirmPassword" value={ user.confirmPassword }  onChange={ handleChange }/>
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
        <Button type="primary" htmlType="submit" onClick={ register }>
          Register
        </Button>
      </Form.Item>
   
      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={()=>navigate("/login")}>
          Login
        </Button>
      </Form.Item>
      
    </Form>
  </Card>,
   
    </header>
    </div>
  )
}

export default Register;