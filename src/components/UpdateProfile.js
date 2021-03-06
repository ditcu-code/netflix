import React, { useState } from "react";
import { Upload, message } from "antd";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import updateProfileData from "../stores/actions/updateprofile";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const UpdateProfile = () => {
  const [state, setState] = useState({
    loading: false
  });
  const userdata = useSelector(state => state.userdata.profile)
  const dispatch = useDispatch()
  
  const handleChange = info => {
    console.log('state', state, info)
    if (info.file.status === "uploading") {
        dispatch(updateProfileData(imageUrl))
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  // const uploadButton = (
  //   <div>
  //     {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div className="ant-upload-text">Upload</div>
  //   </div>
  // );
  const { imageUrl } = state;
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
      ) : (
        // uploadButton
        <img src={userdata.image} alt="avatar" style={{ width: "100%" }} />
      )}
    </Upload>
  );
};

export default UpdateProfile;
