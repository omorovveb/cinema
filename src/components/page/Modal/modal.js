import React  from 'react';
import{useState} from 'react';


const Modal = ({detail}) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div onClick={() => setModal(true)} className='detail-img'>
                <img  width={400}  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.poster_path}`} alt=""/>
            </div>
            <div onClick={() => setModal(false)} hidden={!modal} className='blur-modal'/>
            <div hidden={!modal}>
                <div  className='modal'>
                    <img width={400} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.poster_path}`} alt=""/>
                    <div className='modal-items'>
                        <div onClick={() => setModal(false)} className='modal-items--close'>&times;</div>
                        <h3 className='modal-items--title'>{detail.title}</h3>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;