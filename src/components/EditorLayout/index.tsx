import Editor from "./Editor";
import Preview from "./Preview";

const EditorLayout = () => {
    return (
        <div className='flex flex-row'>
            <Editor/>
            <Preview/>
        </div>
    )
}

export default EditorLayout