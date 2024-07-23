import { ReactNode } from 'react';

interface BackgroundImageProps {
    children: ReactNode;
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
    return (
        <div
            className="parallax-bg bg-fixed bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage:
                    'url(https://static.vecteezy.com/system/resources/thumbnails/021/413/707/original/space-background-animation-white-particles-overlay-stars-backdrop-video.jpg)',
            }}
        >
            {children}
        </div>
    );
};

export default BackgroundImage;
