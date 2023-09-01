import { useState } from "react";
import { toast } from 'react-toastify';
import { ImSearch } from "react-icons/im";

export default function Searchbar({ handleFormSubmit, handleKeyPress }) {
    const [SearchImage, setSearchImage] = useState('');

    const handleNameChnge = event => {
        setSearchImage(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (SearchImage.trim() === '') {
            toast('Введіть щось у пошук')
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
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={SearchImage}
                    onChange={handleNameChnge}
                    onKeyPress={handleKeyPress}
                />
            </form>
        </header>
    );
};
