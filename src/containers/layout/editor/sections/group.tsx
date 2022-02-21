/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Group from '../../../../components/editor/sections/Group';

type Props = {
  data: any;
};

const GroupContainer = (props: Props) => {
  const { data } = props;

  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(
    ({ active, movement: [mx], cancel }) => {
      if (mx > 200) cancel();
      api.start({ x: active ? mx : 0, immediate: active });
    },
    { axis: 'lock' }
  );

  return (
    <>
      <Group>
        <animated.div {...bind()} style={{ x }}>
          {data.map((item: any) => {
            return (
              <>
                <Group.Item key={item.id} />
              </>
            );
          })}
        </animated.div>
      </Group>
    </>
  );
};

export default GroupContainer;
