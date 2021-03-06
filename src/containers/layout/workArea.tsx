/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Select from 'react-select';
// TODO Add gesture
// import { useSpring } from '@react-spring/web';
// import { useDrag } from '@use-gesture/react';
// import lodash from 'lodash-es';
// import deepdash from 'deepdash-es';

// Modile view
// import { Global } from '@emotion/react';
// import { styled } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { grey } from '@mui/material/colors';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Typography from '@mui/material/Typography';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
//
import EditIcon from '@mui/icons-material/Edit';
import { WorkArea } from '../../components';
import { useGlobalState, useActions } from '../../store';
import { Page } from '../../Interface/project.interface';
import inputField from '../../components/fields/Elements/inputField';
import QuickBuild from '../../components/quickBuild';
import Icons from '../../components/common/general/Icons';
import Button from '../../components/common/buttons/PrimaryButton';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const options2 = [{ value: 'default', label: 'default' }];

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const Root = styled('div')(({ theme }) => ({
//   height: '100%',
//   backgroundColor:
//     theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
// }));

// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
// }));

// const Puller = styled(Box)(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: 'absolute',
//   top: 8,
//   left: 'calc(50% - 15px)',
// }));

// const Deep = deepdash(lodash);

export default function WorkAreaContainer() {
	const { projects } = useGlobalState((state) => state.Projects);
	const { select } = useActions((action) => action.Projects);

	// const { window } = props;
	// const [open, setOpen] = React.useState(false);

	// const toggleDrawer = (newOpen: boolean) => () => {
	//   setOpen(newOpen);
	// };

	// This is used only for the example
	// const container = window !== undefined ? () => window().document.body : undefined;

	// const [value, setValue] = React.useState('recents');

	// const handleChange = (event: React.SyntheticEvent, newValue: string) => {
	//   setValue(newValue);
	// };

	// const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

	// const bind = useDrag(({ down, offset: [ox, oy] }) =>
	//   api.start({ x: ox, y: oy, immediate: down })
	// );

	// TODO Remove this page const
	const page: Page | undefined = projects[0]?.pages[0] || undefined;

	const [show, setShow] = React.useState(false);
	const [edit, setEdit] = React.useState(true);

	const renderChild = (child: any) => {
		let htmlEle: any;
		switch (child.type) {
			case 'input':
				htmlEle = <inputField.Input style={child.styles} value={child.value} />;
				break;
			case 'text':
				htmlEle = (
					<>
						{edit ? (
							<>
								<QuickBuild>
									<inputField.Input value={child.value} />
								</QuickBuild>
								<QuickBuild>
									<QuickBuild.Row>
										<QuickBuild.Title>
											<Button
												onClick={() => {
													setEdit(false);
												}}
												type="submit"
												size="small"
												width="5rem"
											>
												Save
											</Button>
										</QuickBuild.Title>
										<QuickBuild.Col>
											<QuickBuild.Controller>
												<QuickBuild.ControllerText>
													Type
												</QuickBuild.ControllerText>
												<QuickBuild.Divider />
												<QuickBuild.ControllerButtons>
													<QuickBuild.ControllerButton
														onClick={() => setShow(!show)}
													>
														<Icons name="add" />
													</QuickBuild.ControllerButton>
												</QuickBuild.ControllerButtons>
											</QuickBuild.Controller>
											<QuickBuild.Controller>
												<QuickBuild.ControllerText>
													Style
												</QuickBuild.ControllerText>
												<QuickBuild.Divider />
												<QuickBuild.ControllerButtons>
													<QuickBuild.ControllerButton
														onClick={() => setShow(!show)}
													>
														<Icons name="add" />
													</QuickBuild.ControllerButton>
												</QuickBuild.ControllerButtons>
											</QuickBuild.Controller>
										</QuickBuild.Col>
									</QuickBuild.Row>
								</QuickBuild>
							</>
						) : (
							<QuickBuild.Preview>
								<QuickBuild.Previewer previewType="text">
									{child.value}
								</QuickBuild.Previewer>
								<QuickBuild.Button
									onClick={() => {
										setEdit(!edit);
									}}
								>
									<EditIcon
										style={{ width: '22px', height: '22px', fill: '#bbbbbb' }}
									/>
								</QuickBuild.Button>
								<QuickBuild.Button>
									<Icons
										style={{ width: '22px', height: '22px', fill: '#bbbbbb' }}
										name="dradragindicator"
									/>
								</QuickBuild.Button>
							</QuickBuild.Preview>
						)}
					</>
				);
				break;
			case 'label':
				htmlEle = (
					<>
						<QuickBuild>
							<QuickBuild.Row>
								<QuickBuild.Title>Type</QuickBuild.Title>
								<QuickBuild.SelectWapper>
									<Select options={options} />
								</QuickBuild.SelectWapper>
							</QuickBuild.Row>
							<QuickBuild.Row>
								<QuickBuild.Title>Style</QuickBuild.Title>
								<QuickBuild.SelectWapper>
									<Select options={options2} />
								</QuickBuild.SelectWapper>
							</QuickBuild.Row>
							<QuickBuild.Row>
								<QuickBuild.Title>Preview</QuickBuild.Title>
								<QuickBuild.Preview>
									<inputField.Label style={child.styles}>
										{child.value}
									</inputField.Label>
								</QuickBuild.Preview>
							</QuickBuild.Row>
						</QuickBuild>
						<QuickBuild>
							<QuickBuild.Border>
								<QuickBuild.Button>Add element</QuickBuild.Button>
							</QuickBuild.Border>
						</QuickBuild>
					</>
				);
				break;
			case 'button':
				htmlEle = (
					<>
						<QuickBuild.Preview>
							<QuickBuild.Previewer previewType="text" style={child.styles}>
								{child.value}
							</QuickBuild.Previewer>
							<QuickBuild.Button
								onClick={() => {
									setEdit(!edit);
								}}
							>
								<EditIcon
									style={{ width: '22px', height: '22px', fill: '#bbbbbb' }}
								/>
							</QuickBuild.Button>
							<QuickBuild.Button>
								<Icons
									style={{ width: '22px', height: '22px', fill: '#bbbbbb' }}
									name="dradragindicator"
								/>
							</QuickBuild.Button>
						</QuickBuild.Preview>
					</>
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
			<WorkArea.Editor>
				<div style={child.styles}>
					{child.children.map((item: any) => renderNode(item))}
				</div>
			</WorkArea.Editor>
		);
	};

	// const drawerBleeding = 56;

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
										{/* <WorkArea.Group /> */}
									</WorkArea.Item>
								</>
							);
						})}
				</div>
			</WorkArea.Bord>
			<WorkArea.MobileNav>
				{/* <div style={{ display: 'none' }}>
          <Root>
            <CssBaseline />
            <Global
              styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                  height: `calc(50% - ${drawerBleeding}px)`,
                  overflow: 'visible',
                },
              }}
            />
            <SwipeableDrawer
              // container={container}
              anchor="bottom"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <StyledBox
                sx={{
                  position: 'absolute',
                  top: -drawerBleeding,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  visibility: 'visible',
                  right: 0,
                  left: 0,
                }}
              >
                <Puller />
                <Typography sx={{ p: 2, color: 'text.secondary' }}>Text</Typography>
              </StyledBox>
              <StyledBox
                sx={{
                  px: 2,
                  pb: 2,
                  height: '100%',
                  overflow: 'auto',
                }}
              >
                <Skeleton variant="rectangular" height="100%" />
              </StyledBox>
            </SwipeableDrawer>
          </Root>
        </div> */}
			</WorkArea.MobileNav>
		</WorkArea>
	);
}
