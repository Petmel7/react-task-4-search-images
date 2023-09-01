import { useState, useEffect } from "react";

export default function FetchApi({ SearchImage, onClick }) {
    const [images, setImage] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);


    useEffect(() => {
        
       
        setStatus('pending', page = 1)

        fetchImages(images, 1);
        
    

        const fetchImages = (name, page) => {
            fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(`No Pokemon with name ${name}`);
                })
                .then(data => {
                    if (data.hits) {
                        this.setState(prevState => ({
                            images: [...prevState.images, ...data.hits],
                            status: 'resolved'
                        }));
                    }
                })
                .catch(error =>
                    this.setState({ error, status: 'rejected' }));
    
        }, []);

    const handleLoadMore = () => {
    
        const nextPage = page + 1;

        fetchImages(SearchImage, nextPage);
        this.setState(prevState => ({
            page: nextPage
        }));
    }

        if (status === 'idle') {
            return <h1>Enter something in the search</h1>;
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
            )
    }
};