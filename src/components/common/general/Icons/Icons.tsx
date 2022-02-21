import * as React from 'react';
import Add from './assets/Add.icon';
import CheckBox from './assets/CheckBox.icon';
import GridView from './assets/GridView.icon';
import KeyboardControl from './assets/KeyboardControl.icon';
import ListView from './assets/ListView.icon';
import Plus from './assets/Plus.icon';
import Radio from './assets/Radio.icon';
import Search from './assets/Search.icon';
import Learn from './assets/Learn.icon';
import Recent from './assets/Recent.icon';
import Drafts from './assets/Drafts.icon';
import Publish from './assets/Publish.icon';
import Help from './assets/Help.icon';
import AlignHorizontalCenter from './assets/AlignHorizontalCenter.icon';
import AlignHorizontalRight from './assets/AlignHorizontalRight.icon';
import AlignHorizontalLeft from './assets/AlignHorizontalLeft.icon';
import { Icon } from './styles/Icon.styles';
import PreviewIcon from './assets/PreviewIcon.icon';
import Clear from './assets/Clear.icon';
import Text from './assets/TeypeText.icon';
import Image from './assets/Image.icon';
import RadioButton from './assets/RadioButton.icon';
import Button from './assets/Button.icon';
import Block from './assets/Block.icon';
import Stretch from './assets/Stretch.icon';
import Google from './assets/Googel.icon';
import DradragIndicator from './assets/DragIndicator';

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
        svg = <Plus style={style} />;
        break;
      case 'add':
        svg = <Add style={style} />;
        break;
      case 'checkbox':
        svg = <CheckBox style={style} />;
        break;
      case 'radio':
        svg = <Radio style={style} />;
        break;
      case 'gridview':
        svg = <GridView style={style} />;
        break;
      case 'listview':
        svg = <ListView style={style} />;
        break;
      case 'search':
        svg = <Search style={style} />;
        break;
      case 'keyboardcontrol':
        svg = <KeyboardControl style={style} />;
        break;
      case 'learn':
        svg = <Learn style={style} />;
        break;
      case 'recent':
        svg = <Recent style={style} />;
        break;
      case 'drafts':
        svg = <Drafts style={style} />;
        break;
      case 'publish':
        svg = <Publish style={style} />;
        break;
      case 'help':
        svg = <Help style={style} />;
        break;
      case 'alignhorizontalcenter':
        svg = <AlignHorizontalCenter style={style} />;
        break;
      case 'alignhorizontalleft':
        svg = <AlignHorizontalLeft style={style} />;
        break;
      case 'alignhorizontalright':
        svg = <AlignHorizontalRight style={style} />;
        break;
      case 'preview':
        svg = <PreviewIcon style={style} />;
        break;
      case 'clear':
        svg = <Clear style={style} />;
        break;
      case 'text':
        svg = <Text style={style} />;
        break;
      case 'image':
        svg = <Image style={style} />;
        break;
      case 'radiobutton':
        svg = <RadioButton style={style} />;
        break;
      case 'button':
        svg = <Button style={style} />;
        break;
      case 'block':
        svg = <Block style={style} />;
        break;
      case 'stretch':
        svg = <Stretch style={style} />;
        break;
      case 'google':
        svg = <Google style={style} />;
        break;
      case 'dradragindicator':
        svg = <DradragIndicator style={style} />;
        break;
      default:
        svg = <></>;
        break;
    }

    return (
      <Icon className={`icon ${className}`} title={title} onClick={onClick}>
        {svg}
      </Icon>
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
