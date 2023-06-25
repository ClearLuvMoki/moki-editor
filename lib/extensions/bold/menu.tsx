import React, {useCallback} from 'react';
import {Button} from "@arco-design/web-react";
import {BsTypeBold} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import Bold from "./core"
import deepEqual from "deep-equal";

type BoldMenuProps = {
    editor: Editor
}

const BoldMenu = React.memo(({editor}: BoldMenuProps) => {
    const isActive = useActive(editor, Bold.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBold()
                .run(),
        [editor]
    );

    return (
        <Button
            type={isActive ? "primary" : "outline"}
            onClick={() => {
                toggleActive();
            }}
        >
            <BsTypeBold/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default BoldMenu;
