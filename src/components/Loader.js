import { ImSpinner } from "react-icons/im"
import LoaderData from "./LoaderData.js";
import pendingImage from './images/panding.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Loader({ SearchImage }) {
    const image = {
        name: SearchImage,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    }
    return (
        <div role="alert">
            <div style={styles.spinner}>
                <ImSpinner size='32' className="icon-spin" />
                Load...
            </div>
            <LoaderData image={image} />
        </div>
    )
}