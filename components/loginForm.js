import { Form, Input, Button, Checkbox, Space } from 'antd';


export default function LoginForm(){

    const layout = {
        labelCol: {
          span: 10,
        },
        wrapperCol: {
          span: 4,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 10,
          span: 16,
        },
      };
      
      const Demo = () => {
        const login = (values) => {
          console.log('Success:', values);
        };
        const loginFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };

    }
    return(

       <div>

            <Form {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={Demo.login}
            onFinishFailed={Demo.loginFailed} 
            >
                <Form.Item
                label="Usuário"
                name="user"
                rules={[
                     {
                        required: true,
                        message: 'Informe o seu usuário!'
                     },
                 ]}>
                    <Input/>
                </Form.Item>

                <Form.Item
                label="Senha"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Informe sua senha!',
                    },
                ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}
                name="Lembrar de mim"
                valuePropName="remember">
                    <Checkbox>Lembrar de mim</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" 
                    htmlType="submit">
                        Login
                    </Button> 

                </Form.Item>      
            </Form>

        </div>

    )
}