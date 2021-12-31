import React, { useCallback } from 'react';
import { Upload, message, Button, Card } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import request from 'umi-request';
import '../tools.scss';
const UploadFile = () => {
  const customRequest = useCallback(async (params) => {
    const formData = new FormData();
    formData.append('file', params.file);
    request(`//m82-dev.hexcloud.cn/api/v1/lego/upload/`, {
      method: 'POST',
      data: formData,
      mode: 'cors',
    })
      .then((response) => {
        console.log(response);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const props = {
    name: 'file',
    showUploadList: false,
    customRequest,
    onChange(info: UploadChangeParam) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Card className="upload-container">
      <Upload {...props}>
        <Button type="primary" icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
    </Card>
  );
};

export { UploadFile };
