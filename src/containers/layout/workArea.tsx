/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
// import { useSpring } from '@react-spring/web';
// import { useDrag } from '@use-gesture/react';
// import lodash from 'lodash-es';
// import deepdash from 'deepdash-es';
import { WorkArea } from '../../components';
// import { InputField } from '../fields';
import { useGlobalState, useActions } from '../../store';
import { Page } from '../../Interface/project.interface';
import LineText from '../../components/fields/Elements/Text';
import inputField from '../../components/fields/Elements/inputField';
import MyButton from '../../components/fields/Elements/button';
import Icons from '../../components/common/general/Icons';

// const Deep = deepdash(lodash);

export default function WorkAreaContainer() {
  const { projects } = useGlobalState((state) => state.Projects);
  const { select } = useActions((action) => action.Projects);

  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // const bind = useDrag(({ down, offset: [ox, oy] }) =>
  //   api.start({ x: ox, y: oy, immediate: down })
  // );

  // TODO Remove this page const
  const page: Page | undefined = projects[0]?.pages[0] || undefined;

  const renderChild = (child: any) => {
    let htmlEle: any;
    switch (child.type) {
      case 'input':
        htmlEle = <inputField.Input style={child.styles} value={child.value} />;
        break;
      case 'text':
        htmlEle = (
          <LineText.Text style={child.styles}>{child.value}</LineText.Text>
        );
        break;
      case 'label':
        htmlEle = (
          <inputField.Label style={child.styles}>
            {child.value}
          </inputField.Label>
        );
        break;
      case 'button':
        htmlEle = (
          <MyButton onClick={() => {}} style={child.styles}>
            {child.value}
          </MyButton>
        );
        break;
      default:
        return <div>{child.value}</div>;
    }
    return htmlEle;
  };

  // eslint-disable-next-line consistent-return
  const renderNode = (child: any) => {
    // eslint-disable-next-line consistent-return
    if (!child.children) {
      return renderChild(child);
    }
    return (
      <div style={child.styles}>
        {child.children.map((item: any) => renderNode(item))}
      </div>
    );
  };

  return (
    <WorkArea>
      <WorkArea.Bord style={page?.styles}>
        <div style={page?.styles}>
          {page &&
            page?.children?.map((item) => {
              return (
                <>
                  <WorkArea.Item
                    // key={ite}
                    style={item.styles}
                    onClick={() => {
                      select({ item, type: 'element' });
                    }}
                  >
                    {renderNode(item)}
                    <WorkArea.Group />
                  </WorkArea.Item>
                </>
              );
            })}
        </div>
      </WorkArea.Bord>
      <WorkArea.MobileNav>
        <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Insets"
            value="recents"
            icon={<Icons name="insert" />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<Icons name="text" />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<Icons name="button" />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </WorkArea.MobileNav>
    </WorkArea>
  );
}
