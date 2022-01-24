import * as React from 'react';
import Welcome from './assets/Welcome.ill';
import { Illustrations } from './styles/Illustrations';

type Props = {
    name: string;
    style: React.CSSProperties;
    title?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
};


const Icons = (props: Props) => {
    const { name, style, title, className, onClick } = props;

    const container = (iconType: string) => {
        let svg = <></>;

        switch (iconType.toLowerCase()) {
            case 'plus':
                svg = <Welcome style={style} />;
                break;

            default:
                svg = <></>;
                break;
        }

        return (
            <Illustrations className={`icon ${className}`} title={title} onClick={onClick}>
                {svg}
            </Illustrations>
        );
    };
    return container(name);
};

Icons.defaultProps = {
    style: {},
    title: '',
    className: ''
};

export default Icons;
