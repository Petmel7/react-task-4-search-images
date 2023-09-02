import errorImage from './images/error.png';

export default function ErrorImageRejected({ message }) {
    return (
        <div role='alert'>
            <img src={errorImage} alt="sadcat" width="250" />
            <h3>{message}</h3>
        </div>
    );
};