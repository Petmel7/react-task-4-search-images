import { ImSpinner } from "react-icons/im"

export default function Loader() {
    return (
        <div role="alert" className="spinner-container">
            <div className="spinning-icon">
                <ImSpinner />
            </div>
            <div className="spinning-text">Loading...</div>
        </div>
    );
}