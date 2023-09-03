import { useState } from "react";
import { toast } from 'react-toastify';
import { ImSearch } from "react-icons/im";

export default function Searchbar({ handleFormSubmit, handleKeyPress }) {
    const [SearchImage, setSearchImage] = useState('');

    const handleImageChnge = event => {
        setSearchImage(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (SearchImage.trim() === '') {
            toast('Enter something in the search')
            return;
        }

        handleFormSubmit(SearchImage);
        setSearchImage('');
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <ImSearch className="SearchForm-icon" />
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="on"
                    autoFocus
                    placeholder="Search images and photos"
                    name="SearchImage"
                    value={SearchImage}
                    onChange={handleImageChnge}
                    onKeyPress={handleKeyPress}
                />
            </form>
        </header>
    );
};


// import React, { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import { ImSearch } from "react-icons/im";

// export default function Searchbar({ handleFormSubmit, handleKeyPress }) {
//     const [SearchImage, setSearchImage] = useState('');

//     useEffect(() => {
//         // Отримати збережене значення з сховища браузера
//         const storedSearchImage = localStorage.getItem("searchImage");
//         if (storedSearchImage) {
//             setSearchImage(storedSearchImage);
//         }
//     }, []); // Запустити це ефект лише один раз, при монтуванні компоненти

//     const handleNameChange = event => {
//         const newValue = event.currentTarget.value.toLowerCase();
//         setSearchImage(newValue);

//         // Зберегти значення в сховище браузера
//         localStorage.setItem("searchImage", newValue);
//     }

//     const handleSubmit = event => {
//         event.preventDefault();

//         if (SearchImage.trim() === '') {
//             toast('Введіть щось у пошук')
//             return;
//         }

//         handleFormSubmit(SearchImage);
//         setSearchImage('');

//         // Після відправлення форми можна очистити також і сховище браузера
//         localStorage.removeItem("searchImage");
//     }

//     return (
//         <header className="Searchbar">
//             <form className="SearchForm" onSubmit={handleSubmit}>
//                 <button type="submit" className="SearchForm-button">
//                     <ImSearch className="SearchForm-icon" />
//                 </button>

//                 <input
//                     className="SearchForm-input"
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                     value={SearchImage}
//                     onChange={handleNameChange}
//                     onKeyPress={handleKeyPress}
//                 />
//             </form>
//         </header>
//     );
// };
