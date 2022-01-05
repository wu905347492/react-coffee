import React, { useState, useCallback } from 'react';
import { Upload, List, Button, Card, Space, Image, message, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import request from 'umi-request';
import '../tools.scss';

const initialList = JSON.parse(localStorage.getItem('fileList') || '[]');

const copy = async (url: string) => {
  const clipboardObj = navigator.clipboard;
  try {
    await clipboardObj.writeText(url);
    message.success('复制成功');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const UploadFileComponent = () => {
  const [fileList, setFileList] = useState(initialList);

  const customRequest = useCallback(
    async (params) => {
      const formData = new FormData();
      const list: string[] = [];
      formData.append('file', params.file);
      request(`//m82-dev.hexcloud.cn/api/v1/lego/upload/`, {
        method: 'POST',
        data: formData,
        mode: 'cors',
      })
        .then((resp) => {
          list.push(resp?.payload?.imageUrl);
          localStorage.setItem('fileList', JSON.stringify([...fileList, ...list]));
          setFileList([...fileList, ...list]);
          return;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [fileList],
  );

  const props = {
    name: 'file',
    showUploadList: false,
    multiple: true,
    customRequest,
  };
  return (
    <Card className="upload-container">
      <Upload key="upload" {...props}>
        <Button type="primary" icon={<UploadOutlined />}>
          上传文件
        </Button>
      </Upload>
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
              <Image width={100} src={item} />
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
