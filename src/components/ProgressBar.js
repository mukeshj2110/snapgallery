import React ,{useEffect} from 'react';
import  useStorage  from '../hooks/useStorage';
import {timestamp , projectFirestore} from '../firebase_config';
import { motion } from 'framer-motion';

export default function ProgressBar({file,setFile}) {

    const { url , progress} = useStorage(file);
    console.log(progress,url);
    useEffect(() => {
        const collectionRef = projectFirestore.collection('images');
       if(url){
        const createdAt = timestamp();
        collectionRef.add({url , createdAt})
           setFile(null);
       }
    }, [url,setFile])

    return (
        <motion.div className="progress-bar" 
            initial={{width:0}}
            animate={{width: progress + '%'}}
        >
        </motion.div>
    )
}
