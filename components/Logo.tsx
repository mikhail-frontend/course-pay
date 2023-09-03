import React from 'react';
import Image from "next/image";

const Logo: React.FC<{ className?: string, onClick?: (event:React.MouseEvent<HTMLImageElement>) => void }> =
    ({
         className, onClick = () => {
        }, ...rest
     }) => {

        return <Image src='/mainLogo.svg'
                      alt="RusUdemy. Udemy как купить. Udemy как оплатить российской картой."
                      title="RusUdemy. Udemy как купить. Udemy как оплатить российской картой."
                      width={150}
                      height={48}
                      priority={true}
                      className={className}
                      {...rest}
                      onClick={onClick}/>;
};

export default Logo;