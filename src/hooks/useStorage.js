import {useState , useEffect} from 'react';
import { imgstorage } from '../firebase_config';

 const useStorage = (file) =>{
    const [progress,setProgress] = useState(0);
    const [error ,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(() => {
        
        console.log(file);
        // const storageRef = imgstorage.ref(file.name).put(file);
        

        // storageRef.on('state changed' ,(snap)=>{
        //     let percent = (snap.bytesTransfered / snap.totalBytes)*100;
        //     setProgress(percent);
        // },(err) =>{
        //     setError(err);
        // },
        // ()=>{
        //     imgstorage.ref('file')
        //     .child(file.name)
        //     .getDownloadURL()
        //     .then((url)=>{
        //         setUrl(url);
        //     });
            
        // }
        // )


    }, [file]);

    return{ progress , url ,error }
 }

 export default useStorage;