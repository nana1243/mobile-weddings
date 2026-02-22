import image1 from '../../assets/image/image1.png';
import image2 from '../../assets/image/image2.png';
import image3 from '../../assets/image/image3.png';
import image4 from '../../assets/image/image4.png';
import image5 from '../../assets/image/image5.png';
import image6 from '../../assets/image/image6.png';
import image7 from '../../assets/image/image7.png';
import image8 from '../../assets/image/image8.png';
import image9 from '../../assets/image/image9.png';

import styles from './index.module.css'

const Gallery = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    return (
        <div style={{backgroundColor: '#f0f0f0'}}>
            <div className={styles.container}>
                {images.map((img, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img src={img} alt={`gallery-${index}`}/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Gallery;