import * as React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { WorkSpace } from '../../components';
import img from '../../assets/images/img-3.png';
import img2 from '../../assets/images/donny-jiang-Uj_g1ZSzPoY-unsplash.jpg';
import img3 from '../../assets/images/tamanna-rumee-vn4dC0yFtg8-unsplash.jpg';
import { useGlobalState, useActions } from '../../store';
import { MyProject } from '../../store/projects.model';
import Button from '../../components/common/buttons/PrimaryButton';
import Icon from '../../components/common/general/Icons';
import { lightGray } from '../../utils/colors';
import MenuButton from '../../components/common/buttons/MenuButton';

type Params = {
  workSpace: string;
};

export default function WorkSpaceContainer() {
  const loading = false;
  const [viewLayout, setViewLayout] = React.useState('grid');
  const { projects } = useGlobalState((state) => state.Projects);
  const { addProject, select, setProject } = useActions(
    (action) => action.Projects
  );
  const { workSpace } = useParams<Params>();

  const newProjectStyles = {
    display: 'flex',
    backgroundColor: 'transparent',
    border: '1px dashed #bbbb',
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none'
  };

  const loadSkeleton = () => {
    return (
      <>
        <Grid container wrap="nowrap">
          <Box sx={{ p: 1.2 }}>
            <Skeleton width={240} height={280} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box sx={{ p: 1.2 }}>
            <Skeleton width={240} height={280} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
          <Box sx={{ p: 1.2 }}>
            <Skeleton width={240} height={280} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      </>
    );
  };

  const handleCreateProject = () => {
    addProject({
      projectName: 'tondis-project',
      author: 'rotonda',
      thumbnail: img,
      pages: [],
      viewed: moment().format('do'),
      edited: moment().format('do')
    });
  };

  const handleClickProject = (item: MyProject) => {
    select({ type: 'project', item });
    setProject(item);
  };

  const render = () => {
    let view;
    switch (workSpace) {
      case 'recent':
        view = (
          <>
            {projects.length > 0 ? (
              projects.map((item) => {
                return (
                  <>
                    {viewLayout === 'grid' ? (
                      <WorkSpace.GridView
                        onClick={() => handleClickProject(item)}
                      >
                        <WorkSpace.Project>
                          <WorkSpace.ProjectThumbnail
                            to={`/project/${item.id}/${item.pages[0].id}`}
                          >
                            <WorkSpace.Image src={item.thumbnail} />
                          </WorkSpace.ProjectThumbnail>
                          <WorkSpace.ProjectInfo>
                            <WorkSpace.Row>
                              <WorkSpace.ProjectTitle to="/project">
                                {item.projectName}
                              </WorkSpace.ProjectTitle>
                              <WorkSpace.IconWarper>
                                <WorkSpace.Menu>
                                  <Icon name="keyboardcontrol" />
                                  <WorkSpace.MenuWarper>
                                    <WorkSpace.MenuList>
                                      <WorkSpace.MenuListItem>
                                        {item.setting}
                                      </WorkSpace.MenuListItem>
                                    </WorkSpace.MenuList>
                                  </WorkSpace.MenuWarper>
                                </WorkSpace.Menu>
                              </WorkSpace.IconWarper>
                            </WorkSpace.Row>
                            <WorkSpace.ProjectDescription>
                              <WorkSpace.ProjectDescriptionText>
                                {item.author}
                              </WorkSpace.ProjectDescriptionText>
                              <WorkSpace.ProjectDescriptionText>
                                {item.createdAt}
                              </WorkSpace.ProjectDescriptionText>
                            </WorkSpace.ProjectDescription>
                          </WorkSpace.ProjectInfo>
                        </WorkSpace.Project>
                      </WorkSpace.GridView>
                    ) : (
                      <WorkSpace.ListView>
                        <WorkSpace.List>
                          <WorkSpace.ListItem>
                            <WorkSpace.Box>fgf</WorkSpace.Box>
                            <WorkSpace.Diteils>
                              <WorkSpace.ListHeading>
                                {item.author}
                              </WorkSpace.ListHeading>
                              <WorkSpace.ListText>
                                {item.createdAt}
                                {' . '} viewes: {item.viewed}, edited:{' '}
                                {item.edited}
                              </WorkSpace.ListText>
                            </WorkSpace.Diteils>
                            <MenuButton style={{ display: 'block' }}>
                              <Icon name="keyboardcontrol" />
                            </MenuButton>
                          </WorkSpace.ListItem>
                        </WorkSpace.List>
                      </WorkSpace.ListView>
                    )}
                  </>
                );
              })
            ) : (
              <></>
            )}
            {viewLayout === 'grid' && (
              <WorkSpace.Project style={newProjectStyles}>
                <Button
                  onClick={() => handleCreateProject()}
                  iconName="add"
                  color="tertiary"
                  type="button"
                >
                  Create Project
                </Button>
              </WorkSpace.Project>
            )}
          </>
        );
        break;
      case 'learn':
        view = (
          <>
            <WorkSpace.Video image={img2}>
              <WorkSpace.VideoIconWaper>
                <Icon
                  name="learn"
                  style={{ width: '48px', height: '48px', color: lightGray }}
                />
              </WorkSpace.VideoIconWaper>
            </WorkSpace.Video>
            <WorkSpace.Video image={img3}>
              <WorkSpace.VideoIconWaper>
                <Icon
                  name="learn"
                  style={{ width: '48px', height: '48px', color: lightGray }}
                />
              </WorkSpace.VideoIconWaper>
            </WorkSpace.Video>
          </>
        );
        break;
      default:
        break;
    }
    return view;
  };

  return (
    <WorkSpace>
      <WorkSpace.Header>
        <WorkSpace.HeaderTitle>WorkSpace</WorkSpace.HeaderTitle>
        <WorkSpace.Row>
          <WorkSpace.Search>
            <WorkSpace.IconWarper>
              <Icon style={{ width: '14', height: '14' }} name="search" />
            </WorkSpace.IconWarper>
            <WorkSpace.SearchInput placeholder="Search Projects" />
          </WorkSpace.Search>
          <WorkSpace.ViewIconWarper onClick={() => setViewLayout('list')}>
            <Icon name="listview" />
          </WorkSpace.ViewIconWarper>
          <WorkSpace.ViewIconWarper onClick={() => setViewLayout('grid')}>
            <Icon name="gridview" />
          </WorkSpace.ViewIconWarper>
        </WorkSpace.Row>
      </WorkSpace.Header>
      <WorkSpace.Scroll>
        <WorkSpace.ProjectListHeader>
          <WorkSpace.ProjectHeaderTitle>
            {workSpace}
          </WorkSpace.ProjectHeaderTitle>
        </WorkSpace.ProjectListHeader>
        <WorkSpace.Projects>
          {loading ? loadSkeleton() : render()}
        </WorkSpace.Projects>
      </WorkSpace.Scroll>
    </WorkSpace>
  );
}
