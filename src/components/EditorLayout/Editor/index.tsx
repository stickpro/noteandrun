import { invoke } from '@tauri-apps/api'

const saveText = () => {
    console.log('save-text-js')
    invoke('save_text',  { text: 'World' }).then(r => console.log(r))
}
const Editor = () => {
    return (
        <div>
            <textarea
                />
            <button onClick={saveText}>save</button>
        </div>
    )
}

export default Editor