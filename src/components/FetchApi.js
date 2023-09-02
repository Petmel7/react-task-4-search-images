
import { useState, useEffect } from "react";
import Loader from './Loader.js';
import ErrorImageRejected from './imageError.js'

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
        fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`No images found for ${name}`);
            })
            .then(data => {
                if (data.hits) {
                    setImages(prevImages => [...prevImages, ...data.hits]);
                    setStatus('resolved');
                }
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            });
    }

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);

        fetchImages(SearchImage, nextPage);
    }

    if (status === 'idle') {
        return <h2>Enter something in the search</h2>;
    }

    if (status === 'pending') {
        return <Loader SearchImage={SearchImage} />
    }

    if (status === 'rejected') {
        return <ErrorImageRejected message={error.message} />;
    }

    if (status === 'resolved') {
        return (
            <div className="Container">
                <ul className="ImageGallery">
                    {images.map(image => (
                        <li className="ImageGalleryItem" key={image.id}>
                            <img
                                className="ImageGalleryItem-image"
                                src={image.largeImageURL}
                                alt={image.tags}
                                onClick={() => onClick(image.largeImageURL)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="Button">
                    {images.length > 0 && (
                        <button className="Button-more" onClick={handleLoadMore}>
                            Load more
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
