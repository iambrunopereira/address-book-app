import { useEffect, useState } from "react";

export const useCustomHook = () => {
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const changeColor = () => {
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        };
        const intervalId = setInterval(changeColor, 1000);

        return () => clearInterval(intervalId);
    }, []);
    
    return color;
}