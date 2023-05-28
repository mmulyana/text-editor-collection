import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{header: [1,2,3,4,5,6, false]}],
        [{font: []}],
        [{size: []}],
        ['bold','italic','underline','strike','blockquote'],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"}
        ],
        ["link", "image", "video"]
    ]
}

export default function QuillPage() {
  const [value, setValue] = useState('')

  return (
    <div>
      <div>
        <ReactQuill theme='snow' value={value} onChange={setValue} modules={modules} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  )
}
