import React, {useCallback, useEffect, useRef, useState} from "react";

export default function useAnimation<T>(list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>): React.RefObject<HTMLUListElement> | null {
    const [animated, setAnimated]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const wrapRef: React.RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)

    const setElementIsAnimated:React.EffectCallback = useCallback(() => {
        const globalCopy:T[] = [...list];
        globalCopy.forEach((item, index) => {
            const timer:number = (index + 1) * 100;
            setTimeout(() => {
                setList((prevValue) => {
                    const copy = [...prevValue];
                    copy[index] = {...copy[index], animated: true};
                    return copy
                })
            }, timer)
        })
    }, [list, setList]);

    useEffect(() => {
        const target: Element | null = (wrapRef)!.current;
        const handleIntersection = (entries: IntersectionObserverEntry[]):void => {
            if (animated) return;
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    setElementIsAnimated();
                    setAnimated(() => true)
                }
            }
        }
        const observer: IntersectionObserver = new IntersectionObserver(handleIntersection);
        if (animated) observer.disconnect()
        observer.observe(target as Element);
    }, [animated, setElementIsAnimated]);

    return wrapRef;
}
