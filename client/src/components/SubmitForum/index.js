import React, { useEffect, useMemo, useState } from "react";
import { createEditor } from 'slate'
import { Container } from 'react-bootstrap'
import { Slate, Editable, withReact } from 'slate-react'

export default function SubmitForm() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ])
    return (
        <div>
            <Container>
                <h1>Submit Forum</h1>
                <Slate editor={editor} value={value} onChange={value => setValue(value)}>
                    <Editable />
                </Slate>
            </Container>
        </div>
    )
}
