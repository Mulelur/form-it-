import * as React from 'react';
import Group from '../../../../components/editor/sections/Group';

type Props = {
  display: string;
  alignItems: string;
  justifyContent: string;
};

const GroupContainer = (props: Props) => {
  const { display, justifyContent, alignItems } = props;
  return (
    <>
      <Group
        style={{
          display,
          justifyContent,
          alignItems
        }}
      >
        <Group.Item />
      </Group>
    </>
  );
};

export default GroupContainer;
