import * as React from 'react';

type Props = {
    style: React.CSSProperties;
};

const Stretch = (props: Props) => {
    const { style } = props;

    return (
        <>
            <svg style={style} fill='currentColor' version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <title>expand</title>
                <path d="M12.984 9v6h3l-3.984 3.984-3.984-3.984h3v-6h-3l3.984-3.984 3.984 3.984h-3zM3.984 2.016h16.031v1.969h-16.031v-1.969zM3.984 20.016h16.031v1.969h-16.031v-1.969z" />
            </svg>
        </>
    );
};

export default Stretch;
