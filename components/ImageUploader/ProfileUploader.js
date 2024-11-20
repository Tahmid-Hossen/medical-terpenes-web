import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import { useDispatch, useSelector } from 'react-redux';

// Register the plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const FilePondUploader = () => {
    const currentAuthState = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const authToken = Cookies.get('authToken');
    console.log('authToken from client: ' + authToken )
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDJiYTJhOTMwMjc4N2YxZjgzNmVhMiIsIm5hbWUiOiJUYXp1bCBhcyBDdXN0b21lciIsInJvbGUiOiJjdXN0b21lciIsInN0YXR1cyI6IkFjdGl2ZSIsImV4cCI6MTczMDMzNTQ0MjEsImlhdCI6MTczMDMzNTA4Mn0.Y2HFSWTwZwjthaKgElOOdaw_WxT1iSSIVuw4uzP-SfA'; // Replace with the actual token
    const token =authToken;// Replace with the actual token

    const handleSubmit = () => {
        if (files.length === 0) {
            alert("No file selected!");
            return;
        }

        const file = files[0].file;
        const formData = new FormData();
        formData.append('image', file);

        const request = new XMLHttpRequest();
        request.open('PATCH', `${process.env.NEXT_PUBLIC_API_URL}/api/users/upload-image`);
        request.setRequestHeader('Authorization', `${token}`);

        request.upload.onprogress = (e) => {
            console.log(`Upload progress: ${Math.round((e.loaded / e.total) * 100)}%`);
        };

        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                console.log('Upload successful:', request.responseText);
               
            } else {
                alert("Upload failed!");
            }
        };

        request.onerror = () => {
            alert("Upload error!");
        };

        request.send(formData);
    };

    return (
        <div className="userProfileUploader">
            <FilePond
                files={files}
                allowMultiple={false}
                onupdatefiles={setFiles}
                allowImagePreview={true}
                allowFileEncode={true}
                maxFiles={1}
                name="files" 
                labelIdle='Upload Image'
            />

            <button type="submit"  className="input-group-text btn-normal btn-sm" onClick={handleSubmit}>Update Image</button>
        </div>
    );
};

export default FilePondUploader;
