import React, {useCallback} from 'react';
import {Button} from "@arco-design/web-react";
import {BsTypeStrikethrough} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import Strike from "./core"
import deepEqual from "deep-equal";

type StrikeMenuProps = {
    editor: Editor
}

const StrikeMenu = React.memo(({editor}: StrikeMenuProps) => {
    const isActive = useActive(editor, Strike.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleStrike()
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
            <BsTypeStrikethrough/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default StrikeMenu;
