
import { useState } from "react";
import { usePresignedUpload } from "next-s3-upload";

export default function UploadComponent() {
  let [imageUrl, setImageUrl] = useState<string>('');
  let { FileInput, openFileDialog, uploadToS3 } = usePresignedUpload();

  let handleFileChange = async (file: any) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}