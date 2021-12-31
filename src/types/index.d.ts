interface UploadFileInfo {
  file: Record<string, unknown>;
  fileList: [];
}

declare module '@/pages/*' {
  export default React.Component;
  export const Dashboard: React.ComponentType;
  export const User: React.ComponentType;
  export const UploadFile: React.ComponentType;
}
