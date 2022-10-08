import * as React from 'react';
// import moment from 'moment';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { WorkSpace } from '../../components';
// import img from '../../assets/images/img-3.png';
import img2 from '../../assets/images/donny-jiang-Uj_g1ZSzPoY-unsplash.jpg';
import img3 from '../../assets/images/tamanna-rumee-vn4dC0yFtg8-unsplash.jpg';
import { useGlobalState, useActions } from '../../store';
import { MyProject } from '../../store/projects.model';
import { lightGray } from '../../utils/colors';
import Illustrations from '../../components/common/general/illustrations';
import Icons from '../../components/common/general/Icons';

type Params = {
	workSpace: string;
};

const options = ['None', 'Atria', 'Callisto'];

const ITEM_HEIGHT = 48;

export default function WorkSpaceContainer() {
	const loading = false;
	const [viewLayout, setViewLayout] = React.useState('grid');
	const { projects } = useGlobalState((state) => state.Projects);
	const { select, setProject } = useActions((action) => action.Projects);
	const { workSpace } = useParams<Params>();

	// const newProjectStyles = {
	//   display: 'flex',
	//   backgroundColor: 'transparent',
	//   border: '1px dashed #bbbb',
	//   borderRadius: '8px',
	//   justifyContent: 'center',
	//   alignItems: 'center',
	//   boxShadow: 'none'
	// };

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

	// const handleCreateProject = () => {
	//   addProject({
	//     projectName: 'tondis-project',
	//     author: 'rotonda',
	//     thumbnail: img,
	//     pages: [],
	//     viewed: moment().format('do'),
	//     edited: moment().format('do')
	//   });
	// };
	// eslint-disable-next-line unicorn/no-null
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		// eslint-disable-next-line unicorn/no-null
		setAnchorEl(null);
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
						{projects.length === 0 ? (
							projects.length === 0 && <Illustrations name="welcome" />
						) : viewLayout === 'grid' ? (
							<WorkSpace.GridView>
								{projects.map((item) => {
									return (
										<WorkSpace.Project
											key={item.id}
											onClick={() => handleClickProject(item)}
										>
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
															<IconButton
																aria-label="more"
																id="long-button"
																aria-controls={open ? 'long-menu' : undefined}
																aria-expanded={open ? 'true' : undefined}
																aria-haspopup="true"
																onClick={handleClick}
															>
																<MoreVertIcon fontSize="large" />
															</IconButton>
															<Menu
																id="long-menu"
																MenuListProps={{
																	'aria-labelledby': 'long-button',
																}}
																anchorEl={anchorEl}
																open={open}
																onClose={handleClose}
																PaperProps={{
																	style: {
																		maxHeight: ITEM_HEIGHT * 4.5,
																		width: '20ch',
																	},
																}}
															>
																{options.map((option) => (
																	<MenuItem
																		key={option}
																		selected={option === 'Pyxis'}
																		onClick={handleClose}
																	>
																		{option}
																	</MenuItem>
																))}
															</Menu>
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
									);
								})}
							</WorkSpace.GridView>
						) : (
							<WorkSpace.ListView>
								{projects.map((item) => {
									return (
										<WorkSpace.List key={item.id}>
											<WorkSpace.ListItem>
												<WorkSpace.Box>
													<Icons name="formitedit" />
												</WorkSpace.Box>
												<WorkSpace.Diteils>
													<WorkSpace.ListHeading>
														{item.author}
													</WorkSpace.ListHeading>
													<WorkSpace.ListText>
														{item.createdAt}
														{' . '} viewes: {item.viewed}, edited: {item.edited}
													</WorkSpace.ListText>
												</WorkSpace.Diteils>
												<WorkSpace.Menu>
													<IconButton
														aria-label="more"
														id="long-button"
														aria-controls={open ? 'long-menu' : undefined}
														aria-expanded={open ? 'true' : undefined}
														aria-haspopup="true"
														onClick={handleClick}
													>
														<MoreVertIcon fontSize="large" />
													</IconButton>
													<Menu
														id="long-menu"
														MenuListProps={{
															'aria-labelledby': 'long-button',
														}}
														anchorEl={anchorEl}
														open={open}
														onClose={handleClose}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: '20ch',
															},
														}}
													>
														{options.map((option) => (
															<MenuItem
																key={option}
																selected={option === 'Pyxis'}
																onClick={handleClose}
															>
																{option}
															</MenuItem>
														))}
													</Menu>
												</WorkSpace.Menu>
											</WorkSpace.ListItem>
										</WorkSpace.List>
									);
								})}
							</WorkSpace.ListView>
						)}
					</>
				);
				break;
			case 'learn':
				view = (
					<>
						{viewLayout !== 'grid' ? (
							<WorkSpace.VideoGrid image={img2}>
								<WorkSpace.VideoIconWaper>
									<Icons
										name="learn"
										style={{ width: '48px', height: '48px', color: lightGray }}
									/>
								</WorkSpace.VideoIconWaper>
							</WorkSpace.VideoGrid>
						) : (
							<WorkSpace.Video image={img3}>
								<WorkSpace.VideoIconWaper>
									<Icons
										name="learn"
										style={{ width: '48px', height: '48px', color: lightGray }}
									/>
								</WorkSpace.VideoIconWaper>
							</WorkSpace.Video>
						)}
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
							<Icons style={{ width: '14', height: '14' }} name="search" />
						</WorkSpace.IconWarper>
						<WorkSpace.SearchInput placeholder="Search Projects" />
					</WorkSpace.Search>
					<WorkSpace.ViewIconWarper onClick={() => setViewLayout('list')}>
						<Icons name="listview" />
					</WorkSpace.ViewIconWarper>
					<WorkSpace.ViewIconWarper onClick={() => setViewLayout('grid')}>
						<Icons name="gridview" />
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
