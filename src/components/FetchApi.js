
import { useState, useEffect } from "react";
import Loader from './Loader.js';
import ErrorImageRejected from './imageError.js';
import LoadMoreButton from './LoadMoreButton.js';
import ImageGallery from './ImageGallery.js';
import FetchApiLink from './FetchApiLink.js';

export default function FetchApi({ SearchImage, onClick }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (SearchImage) {
            setStatus('pending');
            setPage(1);
            setImages([]);
            setError(null)

            fetchImages(SearchImage, 1);
        }
    }, [SearchImage]);

    const fetchImages = (name, page) => {

        FetchApiLink({
            name: name,
            page: page,
            setError: setError,
            setStatus: setStatus,
            setImages: setImages
        });
    };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);

        fetchImages(SearchImage, nextPage);
    }

    if (status === 'idle') {
        return <h2>Enter something in the search</h2>;
    }

    if (status === 'pending') {
        return <Loader
            SearchImage={SearchImage} />
    }

    if (status === 'rejected') {
        return <ErrorImageRejected
            message={error.message} />;
    }

    if (status === 'resolved') {
        return (
            <div className="Container">
                <ImageGallery
                    onClick={onClick}
                    images={images} />
                
                <LoadMoreButton
                    handleLoadMore={handleLoadMore}
                    images={images}  />
            </div>
        );
    }
}
