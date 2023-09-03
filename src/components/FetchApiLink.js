
export default function FetchApiLink({
    name,
    page,
    setError,
    setStatus,
    setImages }) {
    
    return (
        fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                return response.json();
            })
        
            .then(data => {
                if (data.hits.length === 0) {
                    const errorMessage = `No images found for ${name}`;
                    setError(new Error(errorMessage));
                    setStatus('rejected');
                } else {
                    setImages(prevImages => [...prevImages, ...data.hits]);
                    setStatus('resolved');
                }
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            })
    )
}



// export default function FetchApiLink({ name, page, setError, setStatus, setImages }) {
//     setTimeout(() => {
//         fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 if (data.hits.length === 0) {
//                     const errorMessage = `No images found for ${name}`;
//                     setError(new Error(errorMessage));
//                     setStatus('rejected');
//                 } else {
//                     setImages(prevImages => [...prevImages, ...data.hits]);
//                     setStatus('resolved');
//                 }
//             })
//             .catch(error => {
//                 setError(error);
//                 setStatus('rejected');
//             });
//     }, 5000);
//     return null; // або інша реакція на загрузку (наприклад, повернення іконки завантаження)
// }
