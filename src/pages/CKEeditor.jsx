import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import parse from 'html-react-parser'

export default function CKEpage() {
  const [data, setData] = useState('')
  return (
    <div>
      <div>
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData()
            setData(data)
          }}
        />
      </div>

      <div>{parse(data)}</div>
    </div>
  )
}
