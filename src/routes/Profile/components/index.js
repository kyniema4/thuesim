import React from 'react';
import { connect } from 'dva';
import {Layout, Row, Col, Typography, Avatar, Form, Input, Button, Icon, Upload, Checkbox, message} from 'antd';
import intl from 'react-intl-universal';
import url from '../../../base_url'
import BaseComponent from '../../../components/BaseComponent';
import messages from '../messages';
import messagesHome from '../../Home-Directory/Home/messages';
import './index.less';
import $$ from 'cmn-utils'


const { Content } = Layout;
const { Paragraph } = Typography;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
@connect()
class Profile extends BaseComponent {
  state = {
    loading: false,
    userName:'',
    email:'',
    phoneNumber:'',
    currentPassword:'',
    newPassword:'',
    confirmPassword:'',
    checked:false,
    _id:'',
    imgAvatar: '',
    selectedFile:'',
    token : $$.getStore('user')
  };

  componentWillMount(){
    fetch(url.url+'/users/get_my_profile',{
      method : "POST",
      headers:{'Authorization':this.state.token,"Content-Type":"application/json"}
    }).then(res=>{
      return res.json();
    }).then(data =>{
      this.setState({
        _id:data.data._id,
       userName : data.data.username,
       email:data.data.email,
       phoneNumber:data.data.phoneNumber,
       imgAvatar : data.data.avatar
     })
    }).catch(err =>{
      console.log(err)
    })
  }

  handleChangeAvatar = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {

      this.setState({
        selectedFile: info.file.originFileObj
      })

      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  handleChangeUsername(e){
    this.setState({
      userName:e.target.value
    })
  }

  handleChangePhone(e){
    this.setState({
      phoneNumber:e.target.value
    })
  }

  onChangeCheck = (e) =>{
    this.setState({
        checked : e.target.checked,
    })
}

  handleChangeCurrentPassword(e){
    this.setState({
      currentPassword:e.target.value
    })
  }

  handleChangeNewPassword(e){
    this.setState({
      newPassword:e.target.value
    })
  }

  handleChangeConfirmPassword(e){
    this.setState({
      confirmPassword:e.target.value
    })
  }

  async handleSubmit(e){
    
    if(this.state.checked == true ){
      if(this.state.newPassword.length < 6){
        message.error('do dai mk phai lon hon 6')
        return;
      }
      if(this.state.newPassword == ''|| this.state.confirmPassword == '' ){
        message.error('mk ko dc de trong')
        return;
      }
      if(this.state.newPassword != this.state.confirmPassword){
        message.error('mk ko trung nhau')
        return;
      }
    }
    const formData = new FormData();
    formData.append('file', this.state.selectedFile)
    
   let image = await fetch(url.url+'/resources/upload_resource',{
      method:'POST',
      body: formData,
      headers : {"Authorization":this.state.token}
    }).then(res=>{
      return res.json()
    }).then(data =>{
      return data.data.location
    }).catch(err =>{
      console.log(err)
    })

    var dataBody = {
      data:{
        userInfo:{
          _id: this.state._id,
          password :this.state.newPassword,
          phoneNumber : this.state.phoneNumber,
          avatar : image
        },
      }
    }
    fetch(url.url+'/users/update_profile',{
        method : "POST",
        headers: {"Content-Type": 'application/json', 'Authorization':this.state.token},
        body: JSON.stringify(dataBody)
    }).then(res =>{
      return res.json()
    }).then(res =>{
      message.success("success!")
    }).catch(err =>{
        alert('Error from server')
    })
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'camera'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl, userName, email, phoneNumber, checked, imgAvatar} = this.state;
    const formItemLayout = {
      labelCol: {
        sm: {
          span: 10,
          offset: 0,
        },
        lg: {
          span: 7,
          offset: 0,
        },
      },
      wrapperCol: {
        sm: {
          span: 12,
          offset: 0,
        },
        lg: {
          span: 10,
          offset: 0,
        },
      },
    };
    return (
      <Layout className="full-layout page profile-page">
        <Content>
         <div>
           <Row className="div-center">
             <Col md={18} lg={12}  className="div-profile">
               <Row className="div-profile-top">
                 <Col span={14} className="col-welcome">
                   <Paragraph className="welcome-text">{intl.formatMessage(messages.welcomeBack)}</Paragraph>
                   <Paragraph className="text-avatar">{userName}</Paragraph>
                   <div className="div-avatar">
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      showUploadList={false}
                      className="avatar-uploader"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChangeAvatar}
                    >
                      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                       <span>
                          {imgAvatar ? <img src={imgAvatar} alt="avatar" style={{ width: '100%' }} />: uploadButton}
                        </span>
                      }

                    </Upload>
                     
                   </div>
                 </Col>
                 <Col span={10}  className="col-img">
                   <img src="/images/profile-img.png"/>
                 </Col>
               </Row>
               <div className="div-profile-content">
                 <Paragraph className="information">{intl.formatMessage(messages.profileInfo)}</Paragraph>
                 <Paragraph className="tutorial">{intl.formatMessage(messages.tutorialEdit)}</Paragraph>

                 <Form {...formItemLayout}>
                   <Form.Item label={intl.formatMessage(messages.yourName)}>
                     <Input value={userName} onChange={(e)=>this.handleChangeUsername(e)}/>
                   </Form.Item>
                   <Form.Item label="Email">
                     <Input value={email} type="email" readOnly/>
                   </Form.Item>
                   <Form.Item label={intl.formatMessage(messagesHome.phone)}>
                     <Input value={phoneNumber} type="number" onChange={(e)=>this.handleChangePhone(e)}/>
                   </Form.Item>
                   <Form.Item label={intl.formatMessage(messages.changePassword)}>
                        <Checkbox checked={checked} onChange={this.onChangeCheck}></Checkbox>
                    </Form.Item>
                   {checked ? (
                   <div>
                      <Form.Item label={intl.formatMessage(messages.newPassword)}>
                        <Input.Password type="password" onChange={(e)=>this.handleChangeNewPassword(e)}/>
                      </Form.Item>
                      <Form.Item label={intl.formatMessage(messages.confirmPassword)}>
                        <Input.Password onChange={(e)=>this.handleChangeConfirmPassword(e)}/>
                      </Form.Item>
                    </div>
                    ):''}
                   <Form.Item
                       wrapperCol={{
                         md: {span: 24, offset: 0},
                       }}
                       className="div-btn"
                   >
                     <Button className="add-btn" onClick={(e)=>this.handleSubmit(e)}>{intl.formatMessage(messages.save)}</Button>
                   </Form.Item>
                 </Form>
               </div>
             </Col>
           </Row>
         </div>
        </Content>
      </Layout>
    );
  }
}
export default (Form.create()(Profile));
