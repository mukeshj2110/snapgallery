import { useState, useEffect } from "react";
import { imgstorage  } from "../firebase_config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = imgstorage.ref(`uploads/${file.name}`).put(file);

    
    storageRef.on(
      "state changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      () => {
        imgstorage
          .ref("uploads")
          .child(file.name)
          .getDownloadURL()
         
          .then((url) => {
            setUrl(url);
            console.log(url);
          });

          
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
