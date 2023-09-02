
export default function ImageGallery({ images, onClick }) {
    return (
        <ul className="ImageGallery">
            {images && images.length > 0 ? (
                images.map(image => (
                    <li className="ImageGalleryItem" key={image.id}>
                        <img
                            className="ImageGalleryItem-image"
                            src={image.largeImageURL}
                            alt={image.tags}
                            onClick={() => onClick(image.largeImageURL)}
                        />
                    </li>
                ))
            ) : ('')}
        </ul>
    );
};
