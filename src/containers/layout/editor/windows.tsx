import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SketchPicker } from 'react-color';
// import reactCSS from 'reactcss';
import { useParams } from 'react-router-dom';
import { Panel, Windows } from '../../../components';
import { FormItContext } from '../../../context/FormItContext';
import { useActions } from '../../../store';
import { ICore } from '../../../Interface/core.interface';
import Icon from '../../../components/common/general/Icons';
import LineText from '../../../components/fields/Elements/Text';
import { Fornts } from '../../../fixtures/Font';


type Params = {
  projectId: string;
  pageId: string;
};

type FontType = {
  id: number;
  name: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  type: string;
};

export default function WindowContainer() {
  const { selectedElement } = useContext<ICore>(FormItContext);
  // const { currentStack } = useGlobalState((state) => state.Windows);
  const { editElement } = useActions((action) => action.Projects);
  const { projectId, pageId } = useParams<Params>();


  // const history = useHistory();
  const isOpen = true;

  const currentStack = {
    stack: 'fonts',
    extraData: ''
  };
  // const goTo = (source: string) => {
  //   history.push(source);
  // };

  const renderStack = () => {
    switch (currentStack.stack) {
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
      case 'color':
        return (
          <Windows.Stack>
            <SketchPicker
              color={currentStack.extraData}
              onChangeComplete={(color) =>
                editElement({
                  projectId,
                  pageId,
                  elementId: selectedElement?.id,
                  color,
                  editType: 'elementPosition'
                })
              }
              className="override"
            />
          </Windows.Stack>
        );
      default:
        return '';
    }
  };

  return isOpen ? (
    <Windows>
      <Windows.WindowBarCursor>
        <Windows.NavigationBar>
          <Windows.Title>{currentStack.stack.toUpperCase()}</Windows.Title>
          <Windows.NavigationBarAction>
            <Icon name="clear" />
          </Windows.NavigationBarAction>
        </Windows.NavigationBar>
        <Windows.StackContainer>{renderStack()}</Windows.StackContainer>
      </Windows.WindowBarCursor>
    </Windows>
  ) : (
    <div />
  );
}
