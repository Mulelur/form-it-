import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { SketchPicker } from 'react-color';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Panel, Windows } from '../../../components';
import { useGlobalState } from '../../../store';
import Icon from '../../../components/common/general/Icons';
import LineText from '../../../components/fields/Elements/Text';
import { Fornts } from '../../../fixtures/Font';

type FontType = {
  id: number;
  name: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  type: string;
};

export default function WindowContainer() {
  const { currentStack, isOpen } = useGlobalState((state) => state.Windows);

  const { stack, anchorEl } = currentStack;

  const open = Boolean(anchorEl);
  // const handleClose = () => {
  //   // eslint-disable-next-line unicorn/no-null

  // };

  // const history = useHistory();

  // const goTo = (source: string) => {
  //   history.push(source);
  // };

  const StyledMenu = styled((menuProps: MenuProps) => (
    <Menu
      elevation={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...menuProps}
    />
  ))(() => ({
    '& .MuiMenu-list': {
      padding: '0'
    }
  }));


  const renderStack = () => {
    switch (stack) {
      case 'border':
        return (
          <Windows.Stack>
            <Panel>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>Color</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Button>
                  <Panel.BoxColor>
                    <Panel.Color />
                  </Panel.BoxColor>
                </Panel.Button>
                <Panel.InputWrapper>
                  <Panel.Input />
                </Panel.InputWrapper>
              </Panel.Row>
            </Panel>
          </Windows.Stack>
        );
      case 'fonts':
        return (
          <Windows.Stack>
            <Panel.Col>
              <Windows.SearchWaper>
                <Windows.Search />
                <Icon name="search" />
              </Windows.SearchWaper>
              <Panel.Col>
                {Fornts.map((font: FontType) => {
                  return (
                    <>
                      <Panel.Row>
                        <Panel.TitleWrapper>
                          <Panel.Title>
                            <Panel.TitleSpan>{font.name}</Panel.TitleSpan>
                          </Panel.Title>
                        </Panel.TitleWrapper>
                        <LineText.FontPreview style={{ fontFamily: font.fontFamily, fontSize: font.fontSize }}>
                          {font.name}
                        </LineText.FontPreview>
                      </Panel.Row>
                    </>
                  );
                })
                }
              </Panel.Col>
            </Panel.Col>
          </Windows.Stack>
        );
      case 'shadow':
        return (
          <Windows.Stack>
            <Panel>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>Color</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Col>
                  <Panel.Button>
                    <Panel.BoxColor>
                      <Panel.Color />
                    </Panel.BoxColor>
                  </Panel.Button>
                  <Panel.InputWrapper>
                    <Panel.Input />
                  </Panel.InputWrapper>
                </Panel.Col>
              </Panel.Row>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>X</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Col>
                  <Panel.InputWrapper>
                    <Panel.Input />
                  </Panel.InputWrapper>
                  <Panel.SegmentedControl>
                    <Panel.SegmentsWrapper>
                      <Panel.Segment>
                        <Icon name="add" />
                      </Panel.Segment>
                      <Panel.Divider />
                      <Panel.Segment>
                        <Icon name="remove" />
                      </Panel.Segment>
                    </Panel.SegmentsWrapper>
                  </Panel.SegmentedControl>
                </Panel.Col>
              </Panel.Row>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>Y</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Col>
                  <Panel.InputWrapper>
                    <Panel.Input />
                  </Panel.InputWrapper>
                  <Panel.SegmentedControl>
                    <Panel.SegmentsWrapper>
                      <Panel.Segment>
                        <Icon name="add" />
                      </Panel.Segment>
                      <Panel.Divider />
                      <Panel.Segment>
                        <Icon name="remove" />
                      </Panel.Segment>
                    </Panel.SegmentsWrapper>
                  </Panel.SegmentedControl>
                </Panel.Col>
              </Panel.Row>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>Blur</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Col>
                  <Panel.InputWrapper>
                    <Panel.Input />
                  </Panel.InputWrapper>
                  <Panel.SegmentedControl>
                    <Panel.SegmentsWrapper>
                      <Panel.Segment>
                        <Icon name="add" />
                      </Panel.Segment>
                      <Panel.Divider />
                      <Panel.Segment>
                        <Icon name="remove" />
                      </Panel.Segment>
                    </Panel.SegmentsWrapper>
                  </Panel.SegmentedControl>
                </Panel.Col>
              </Panel.Row>
              <Panel.Row>
                <Panel.TitleWrapper>
                  <Panel.Title>
                    <Panel.TitleSpan>Spread</Panel.TitleSpan>
                  </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Col>
                  <Panel.InputWrapper>
                    <Panel.Input />
                  </Panel.InputWrapper>
                  <Panel.SegmentedControl>
                    <Panel.SegmentsWrapper>
                      <Panel.Segment>
                        <Icon name="add" />
                      </Panel.Segment>
                      <Panel.Divider />
                      <Panel.Segment>
                        <Icon name="remove" />
                      </Panel.Segment>
                    </Panel.SegmentsWrapper>
                  </Panel.SegmentedControl>
                </Panel.Col>
              </Panel.Row>
            </Panel>
          </Windows.Stack>
        );
      // case 'color':
      //   return (
      //     <Windows.Stack>
      //       <SketchPicker
      //         color={currentStack.extraData}
      //         onChangeComplete={(color) =>
      //           editElement({
      //             projectId,
      //             pageId,
      //             elementId: selectedElement?.id,
      //             color,
      //             editType: 'elementPosition'
      //           })
      //         }
      //         className="override"
      //       />
      //     </Windows.Stack>
      //   );
      default:
        return '';
    }
  };

  return isOpen ? (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button'
      }}
      anchorEl={anchorEl}
      open={open}
    // onClose={handleClose}
    >
      <Windows onClick={() => {
        // handleClose();
      }} >
        <Windows.WindowBarCursor>
          <Windows.NavigationBar>
            <Windows.Title>{stack.toUpperCase()}</Windows.Title>
            <Windows.NavigationBarAction>
              <Icon name="clear" />
            </Windows.NavigationBarAction>
          </Windows.NavigationBar>
          <Windows.StackContainer>{renderStack()}</Windows.StackContainer>
        </Windows.WindowBarCursor>
      </Windows>
    </StyledMenu>
  ) : (
    <div />
  );
}
