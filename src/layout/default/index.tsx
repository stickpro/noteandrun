import { ReactNode } from "react";
const DefaultLayout = ({children}: {children?: ReactNode}) => {
    return (
        <div className='main-layout main-layout-full flex flex-row'>
            {children}
        </div>
    )
}
export default DefaultLayout