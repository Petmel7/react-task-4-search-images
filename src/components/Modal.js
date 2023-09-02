import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {

    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                console.log('ESC')
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {

            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const handleBackdropClick = event => {
        // console.log('Клікнули в бекдроп')
        // console.log(event.currentTarget)
        // console.log(event.target)

        if (event.currentTarget === event.target) {
            onClose();
        };
    };
    
    return createPortal(
        <div className="Overlay"
            onClick={handleBackdropClick}>
                
            <div className="Modal">
                {children}
            </div>
        </div>,
        modalRoot
    );
};
