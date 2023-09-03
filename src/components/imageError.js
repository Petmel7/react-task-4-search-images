import errorImage from './images/error.png';

export default function ErrorImageRejected({ message }) {
    return (
        <div role='alert' className='errorImage'>
            <img
                src={errorImage}
                alt="sadcat"
                width="250" />
            
            <h3 className='errorImageText'>{message}</h3>
        </div>
    );
};