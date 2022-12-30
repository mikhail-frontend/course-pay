import React, {useCallback, useEffect, useRef, useState} from "react";

type animationType<T> = (list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>) => void

const useAnimation:animationType<any> = (list, setList) => {
    const [animated, setAnimated]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const wrapRef:React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const setElementIsAnimated = useCallback(() => {
        const globalCopy = [...list];
        globalCopy.forEach((item, index) => {
            const timer = (index + 1) * 100;
            setTimeout(() => {
                setList((prevValue) => {
                    const copy = [...prevValue];
                    copy[index] = {...copy[index], animated: true};
                    return copy
                })
            }, timer)
        })
    }, [list]);

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
    }, [animated, setElementIsAnimated])

    return wrapRef;
}
export default useAnimation;