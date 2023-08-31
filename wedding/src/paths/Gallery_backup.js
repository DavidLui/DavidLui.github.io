import * as React from 'react';
import './gallery.css';

const Gallery = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const thumbImagesArray = React.useMemo(() => importAll(require.context(`../imgs/thumbnails/`, false, /\.(png|jpe?g|svg)$/)), []);

    const imagesArray = React.useMemo(() => importAll(require.context(`../imgs/`, false, /\.(png|jpe?g|svg)$/)), []);


    function importAll(r) {
        return r.keys().map(r);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }

        if (event.key === "ArrowRight") {
            incrementIndex();
        }

        if (event.key === "ArrowLeft") {
            decrementIndex();
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    const handleClick = (event) => {
        const isNextOrPrev = event.target.className === 'next' ||
            event.target.className === 'prev';
        if (isOpen && !isNextOrPrev) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen]);

    const openModal = (index) => {
        setIsOpen(true);
        setCurrentIndex(index);
    };

    const getImages = () => {
        const images = thumbImagesArray.map((i, index) => {
            return (
                <div
                    key={`img_${index}`}
                    className='column-gallery'
                >
                    <img
                        src={i.default}
                        className={'hover-shadow cursor'}
                        onClick={() => { openModal(index) }}
                    />
                </div>
            );
        });

        return (
            <div className="row">{images}</div>
        );
    };

    const incrementIndex = () => {
        const newIndex = currentIndex + 1;
        if (newIndex > thumbImagesArray.length - 1) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(newIndex);
    };

    const decrementIndex = () => {
        const newIndex = currentIndex - 1;
        if (newIndex < 0) {
            setCurrentIndex(thumbImagesArray.length - 1);
            return;
        }
        setCurrentIndex(newIndex);
    };

    const getModal = () => {
        const source = imagesArray[currentIndex].default;
        const photographer = /.+\/(.+)_/.exec(source)?.[1];

        return (
            <div
                id="myModal"
                className={'modal'}
                style={{ display: 'block' }}
            >
                <div className="modal-content">
                    <div className='modal-imgs'>
                        <div className='mySlides'>
                            <img src={source} />
                        </div>
                    </div>

                    <a className="prev" onClick={decrementIndex}>&#10094;</a>
                    <a className="next" onClick={incrementIndex}>&#10095;</a>
                    <div className="caption-container">
                        <p id="caption">Credit: {photographer}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {getImages()}
            {isOpen && getModal()}
        </>
    );
};

export default Gallery;
