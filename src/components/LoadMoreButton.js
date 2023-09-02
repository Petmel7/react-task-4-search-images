export default function LoadMoreButton({ handleLoadMore, images }) {

    return (
        <div className="Button">
            {images.length > 0 && (
                <button className="Button-more"
                    onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
    );
};