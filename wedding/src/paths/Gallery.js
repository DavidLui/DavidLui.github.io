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

    React.useEffect(() => {
        var priscilla = [1, 2, 3, 4, 5, 16, 23, 24, 25];
        var cynthia = [6];
        var brit = [7, 8, 35, 36, 37, 38];
        var heart = [9, 10, 11, 12, 13, 14, 32, 33, 34];
        var kruks = [15];
        var sasha = [17, 18];
        var dp = [20, 21, 22];
        var lc = [26, 27, 28, 29, 30];
        var echo = [31];
        var even = [39, 40];
        var eric = [41, 42, 43, 44];
        var natotuke = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        var george = [58, 59, 60, 61, 62]
        let photographer = '';

        for (var i = 1; i < 64; i++) {
            if (priscilla.includes(i)) {
                photographer = 'Priscilla Choi Photography';
            }
            else if (cynthia.includes(i)) {
                photographer = 'Cynthia Chung Photography';
            }
            else if (brit.includes(i)) {
                photographer = 'Brittany Jean Photography';
            }
            else if (heart.includes(i)) {
                photographer = 'Heartfelt Studios';
            }
            else if (kruks.includes(i)) {
                photographer = 'The Kruks Photography';
            }
            else if (sasha.includes(i)) {
                photographer = 'Sascha Reinking Photography';
            }
            else if (dp.includes(i)) {
                photographer = 'Design & Photography: Priscilla Choi';
            }
            else if (lc.includes(i)) {
                photographer = 'L.C. Allison Photography';
            }
            else if (echo.includes(i)) {
                photographer = 'Echo Chen';
            }
            else if (even.includes(i)) {
                photographer = 'Even Yu';
            }
            else if (eric.includes(i)) {
                photographer = 'Eryc Perez de Tagle';
            }
            else if (natotuke.includes(i)) {
                photographer = 'Weddings by Nato Tuke';
            }
            else if (george.includes(i)) {
                photographer = 'George Street Photography';
            }
            else {
                photographer = '';
            }
        }
    }, []);

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
