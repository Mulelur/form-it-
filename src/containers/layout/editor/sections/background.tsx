import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Background from '../../../../components/editor/sections/Background';

type Props = {
  page: any;
};

const BackgroundContainer = (props: Props) => {
  const { page } = props;

  // eslint-disable-next-line no-console
  console.log(page);

  return (
    <Background>
      <Background.Heading>BACKGROUND</Background.Heading>
      <Background.ImageWarper background={page?.styles?.background}>
        <Background.ImageButton>
          <Background.Icon>
            <EditIcon
              style={{ width: '22px', height: '22px', fill: '#bbbbbb' }}
            />
          </Background.Icon>
        </Background.ImageButton>
      </Background.ImageWarper>
    </Background>
  );
};

export default BackgroundContainer;