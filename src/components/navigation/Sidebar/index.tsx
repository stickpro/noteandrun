import { useRef, useState, useEffect } from 'react';

const Sidebar = () => {
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
            className={`h-100 relative select-none cursor-default bg-gray-400 max-w-lg w-52 h-screen resizable`}
            style={{ minWidth: "150px"}}
        >
            <span> text </span>
            <div className='delimiter'></div>
        </div>

    );
};

export default Sidebar;
