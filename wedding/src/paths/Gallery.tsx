import * as React from 'react';
import './gallery.css';

interface WeddingPhoto {
    photographer: string;
    source: string;
}

interface Thumbnail {
    id: number;
    source: string;
    location: string;
}

interface Group {
    photos: Map<number, WeddingPhoto>;
    thumbnails: Thumbnail[];
}

const Gallery = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [group, setGroup] = React.useState<Map<string, Group>>();
    const [selectedGroup, setSelectedGroup] = React.useState<string>(group?.keys()?.next()?.value);
    const [selectedImageId, setSelectedImageId] = React.useState<number>(0);

    const thumbImagesArray = React.useMemo(() => importAll(require.context(`../imgs/thumbnails/`, false, /\.(dir|png|jpe?g|svg)$/)), []);
    const imagesArray = React.useMemo(() => importAll(require.context(`../imgs/`, false, /\.(png|jpe?g|svg)$/)), []);

    function importAll(r: any) {
        return r.keys().map(r);
    }

    React.useEffect(() => {
        setSelectedImageId(0);
    }, [selectedGroup]);

    React.useEffect(() => {
        const thumbnails = new Map();

        thumbImagesArray.forEach((i: any) => {
            const title = i.default;
            const [wedding, p, id] = title.replaceAll('/static/media/', '').split('_');

            let secondLastIndex = title.lastIndexOf('.', title.lastIndexOf('.') - 1);
            let sourceString = title.substring(0, secondLastIndex);
            thumbnails.set(sourceString, title);
            console.log(sourceString)
        });

        const groupsMap: Map<string, Group> = new Map();

        imagesArray.forEach((i: any) => {
            const title = i.default;
            const [wedding, location, photographer, id] = title.replaceAll('/static/media/', '').split('_');

            const img: WeddingPhoto = {
                photographer,
                source: title
            };

            const group: Group = groupsMap.get(wedding) ?? {
                photos: new Map(),
                thumbnails: []
            };

            
            let secondLastIndex = title.lastIndexOf('.', title.lastIndexOf('.') - 1);
            let sourceString = title.substring(0, secondLastIndex);

            const thumbUrl = thumbnails?.get(sourceString);
            console.log(thumbnails)
            group.thumbnails.push({
                id: group.photos.size,
                source: thumbUrl,
                location
            });

            group.photos.set(group.photos.size, img);

            groupsMap.set(wedding, group);
        });

        setGroup(groupsMap);

        console.log(groupsMap);
    }, [imagesArray, thumbImagesArray]);

    // const handleKeyDown = (event) => {
    //     if (event.key === "Escape") {
    //         setIsOpen(false);
    //     }

    //     if (event.key === "ArrowRight") {
    //         incrementIndex();
    //     }

    //     if (event.key === "ArrowLeft") {
    //         decrementIndex();
    //     }
    // };

    // React.useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [currentIndex]);

    const handleClick = (event: any) => {
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

    const openModal = (index: any) => {
        setIsOpen(true);
        setCurrentIndex(index);
    };

    const getImages = () => {
        const weddings = new Set();
        const images = thumbImagesArray.map((i: any, index: number) => {
            const title = i.default;
            const [wedding, location] = title.replace('/static/media/', '').split('_');

            if (weddings.has(wedding)) {
                return;
            }
            else {
                weddings.add(wedding);
            }
            return (
                <div
                    key={`img_${index}`}
                    className='column-gallery'
                >
                    <img
                        src={i.default}
                        className={'hover-shadow cursor'}
                        onClick={() => { setSelectedGroup(wedding) }}
                    />
                    <div>{wedding}</div>
                    <div>{location}</div>
                </div>
            );
        });

        return (
            <div className="row">{images}</div>
        );
    };

    const incrementIndex = () => {
        setSelectedImageId(selectedImageId + 1);
    };

    const decrementIndex = () => {
        setSelectedImageId(selectedImageId - 1);
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

    const getViewer = () => {
        const imgMap = group?.get(selectedGroup);

        if (imgMap) {
            const imgGroup = imgMap.photos.get(selectedImageId);
            if (imgGroup) {
                const { source, photographer } = imgGroup;
                return (
                    <div className={'flex viewerFlexBox'}>
                        <div
                            className={'viewer'}
                        >
                            <div className="modal-content">
                                <div className='mySlides'>
                                    <div className='slide'>
                                        <img src={source} />

                                        <div className="caption-container">
                                            <label id="caption">Credit: {photographer}</label>
                                        </div>
                                    </div>

                                    <div className={'thumbs'}>
                                        {imgMap.thumbnails.map((nail) =>
                                            <div>
                                                <img
                                                    src={nail.source}
                                                    className={'hover-shadow cursor thumbimg'}
                                                    onClick={() => { setSelectedImageId(nail.id) }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {selectedImageId > 0 && <a className="prev" onClick={decrementIndex}>&#10094;</a>}
                                {selectedImageId < imgMap.photos.size - 1 && <a className="next" onClick={incrementIndex}>&#10095;</a>}

                            </div>
                        </div>

                    </div>
                );
            }
        }
    };

    return (
        <div className='img_container'>
            {getImages()}
            {getViewer()}
            {/* {isOpen && getModal()} */}
        </div>
    );
};

export default Gallery;
