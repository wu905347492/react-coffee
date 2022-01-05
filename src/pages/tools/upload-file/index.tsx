import React, { useReducer, useCallback } from 'react';
import { Upload, List, Button, Card, Space, Image, message, Alert, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import request from 'umi-request';
import '../tools.scss';

const copy = async (url: string) => {
  const clipboardObj = navigator.clipboard;
  try {
    await clipboardObj.writeText(url);
    message.success('复制成功');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

function reducer(state: string[], action: string) {
  localStorage.setItem('fileList', JSON.stringify([...state, action]));
  return [...state, action];
}

const UploadFileComponent = () => {
  const initialList = JSON.parse(localStorage.getItem('fileList') || '[]');
  const [fileList, dispatch] = useReducer(reducer, initialList);

  const customRequest = useCallback(async (params) => {
    const formData = new FormData();
    formData.append('file', params.file);
    await request(`//m82-dev.hexcloud.cn/api/v1/lego/upload/`, {
      method: 'POST',
      data: formData,
      mode: 'cors',
    })
      .then((resp) => {
        dispatch(resp?.payload?.imageUrl);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const props = {
    name: 'file',
    showUploadList: false,
    multiple: true,
    customRequest,
  };
  return (
    <Card className="upload-container">
      <Row>
        <Col span={4}>
          <Upload key="upload" {...props}>
            <Button size="large" type="primary" icon={<UploadOutlined />}>
              上传文件
            </Button>
          </Upload>
        </Col>
      </Row>

      {fileList.length !== 0 && (
        <Alert className="upload-message" message="点击链接可复制图片url" type="info" showIcon />
      )}
      <List
        className="upload-img-list"
        bordered
        dataSource={fileList}
        renderItem={(item: string) => (
          <List.Item>
            <Space>
              <Image width={50} src={item} />
              <div
                className="img-url"
                onClick={() => {
                  copy(item);
                }}
              >
                {item}
              </div>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
};

export { UploadFileComponent };
