import React, { useEffect, useState} from "react";

type ButtonType = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
    className?: string,
    to?: string
};

type Coords = {
    x: number,
    y: number
}

const RippleButton: React.FC<ButtonType> = ({onClick, children, className = '', to}) => {

    const [coords, setCoords] = useState<Coords>({x: -1, y: -1});

    const [isRippling, setIsRippling] = useState<boolean>(false);

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>):void => {
        const button = e.target as HTMLButtonElement;
        const rect = button.getBoundingClientRect();
        setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
        onClick && onClick(e);
    }



    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({x: -1, y: -1});
    }, [isRippling]);

    const tagName = to ? 'a' : 'button';

    return (
        <>
            { tagName === 'button' && <button
                className={`ripple-button ${className}`}
                onClick={onClickHandler}>
                {isRippling ? (
                    <span
                        className="ripple"
                        style={{
                            left: coords.x,
                            top: coords.y
                        }}
                    />
                ) : (
                    ''
                )}
                <span className="content">{children}</span>
            </button> }

            { tagName === 'a' && <a href={to} target='_blank'
                className={`ripple-button ${className}`} rel="noreferrer"
                >
                {isRippling ? (
                    <span
                        className="ripple"
                        style={{
                            left: coords.x,
                            top: coords.y
                        }}
                    />
                ) : (
                    ''
                )}

                <span className="content">{children}</span>
            </a> }
        </>
    );
};
export default React.memo(RippleButton);