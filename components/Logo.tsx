import React from 'react';
import Image from "next/image";

const Logo: React.FC<{ className?: string, onClick?: () => void }> =
    ({
         className, onClick = () => {
        }, ...rest
     }) => {

        return <Image src='/mainLogo.svg'
                      alt='Udemy для России'
                      width={150}
                      height={48}
                      priority={true}
                      className={className}
                      {...rest}
                      onClick={onClick}/>;
};

export default Logo;