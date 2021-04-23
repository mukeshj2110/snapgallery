import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImg ,setSelectedImg}) => {

    const clickHandler =(e)=>{
        if(e.target.classList.contains('modal-enlarge')){
            setSelectedImg(null);
        }
        
    }
    return (
        <motion.div className="modal-enlarge" onClick={clickHandler}
         initial={{opacity:0}}
         animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="enlarged img"
            initial={{y: "-100vh"}}
            animate={{y: 0}}
            />
        </motion.div>
    )
}

export default Modal;