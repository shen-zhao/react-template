import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Icon, Input } from 'antd';
import { $post } from '@src/utils/request';
import './index.scss';

const FormItem = Form.Item;

@connect()
@Form.create()
class Login extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        $post('mock/login.json', values)
          .then(res => {
            // console.log(res)
            this.props.history.push("/");
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <div className='form'>
          <div className='logo'>
            <img alt="logo" src={require('../../assets/images/logo.png')}/>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="用户名"
                  autoComplete="off"
                />
              )}

            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  placeholder="密码"
                  autoComplete="off"
                  type="password"
                />
              )}

            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </Fragment>
    )
  }
}

export default Login;

