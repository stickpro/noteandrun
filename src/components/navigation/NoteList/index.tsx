import { useEffect, useRef, useState } from "react";

const NoteList = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;
        const onMouseDown = () => {
            setIsResizing(true);
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            element.style.width = `${e.clientX}px`;
        };
        const onMouseUp = () => {
            setIsResizing(false);
        };
        element.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            element.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isResizing]);
    return (
        <div
            ref={elementRef}
            className={`h-100 relative select-none focus:cursor-col-resize bg-gray-200 max-w-lg w-52 h-screen resizable`}
            style={{ minWidth: "150px"}}
        >
            <span> alongasdasdas </span>
            <div className='delimiter'></div>
        </div>
    )
}

export default NoteList