import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      
    }}
    spin
  />
);

export const Spinner = () => <Spin size="large" indicator={antIcon}/>
