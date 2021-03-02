import { Button, message, Menu, Layout, ConfigProvider, PageHeader, Modal, Select } from 'ant-design-vue'
const RegisterAntdCom = (app: any) => {
  console.log("antd init");
  app
    .use(Select)
    .use(Button)
    .use(Menu)
    .use(Layout)
    .use(ConfigProvider)
    .use(PageHeader)
    .use(Modal);
  app.config.globalProperties.$message = message;
};

export default RegisterAntdCom;