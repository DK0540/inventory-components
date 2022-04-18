import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Checkbox,  Input, InputNumber,Space } from "antd";
import { Card } from 'antd';
import axios from "axios";





const Product = () => {
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
    
      const [keyboard, setKeyboard] = React.useState(true);

      function onChange(value) {
        console.log('changed', value);
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
  <h1>Product</h1>
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
      <Form.Item style={{ width: '100%' ,justifyContent: "center" }}  type="text"  name="name" label="Product name" value={ user.name }   rules={[{ required: true }]} >
        <Input style={{ width: '100%' }} placeholder="Product name" name="name" value={ user.name } onChange={ handleChange }/>
      </Form.Item>
           
      <Form.Item style={{ width: '100%' ,justifyContent: "center" }} type="text" name="company" label="Company name" value={ user.name }   rules={[{ required: true }]} >
        <Input style={{ width: '100%', placeholderTextColor: "red" }} placeholder="Company name" name="name" value={ user.name } onChange={ handleChange }/>
      </Form.Item>

      <Form.Item style={{ width: '100%' ,justifyContent: "center" }} type="text" name="model" label="Model" value={ user.name }   rules={[{ required: true }]} >
        <Input style={{ width: '100%' }} placeholder="Please enter model number" name="name" value={ user.name } onChange={ handleChange }/>
      </Form.Item>

      <Form.Item
        style={{ width: '100%' ,justifyContent: "center"}}
        label="Quantity:"
        name="email" value={ user.email } 
        rules={[
          {
            required: true,
            message: 'Select the quantity',
          },
        ]}
        >
        <InputNumber  style={{ width: '60%'}} min={1} max={100} keyboard={keyboard} defaultValue={3} />
      </Form.Item>

      <Form.Item
        style={{ width: '100%'  }}
        type="number"
        label="Pricing"
        name="phone" value={ user.phone }
        rules={[
          {
            required: true,
            message: 'Please Enter your number',
          },
        ]}
       
      >
        <InputNumber 
        style={{ width: '60%'}}
        min={250}
      defaultValue={1000}
      formatter={value => `${value}  ₹`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
      </Form.Item>
     <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={ register }>
          Register
        </Button>
      </Form.Item>
   
      

      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 14,
        }}
      >
        <Button  type="primary" htmlType="submit" onClick={()=>navigate("/login")}>
          Login
        </Button>
      </Form.Item>
      
    </Form>
  </Card>,
   
    </header>
    </div>
  )
}

export default Product;