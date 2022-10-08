/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { WorkArea } from '../../components';
import { useGlobalState, useActions } from '../../store';
import { Page } from '../../Interface/project.interface';
import inputField from '../../components/fields/Elements/inputField';
import QuickBuild from '../../components/quickBuild';
import Icons from '../../components/common/general/Icons';
import Button from '../../components/common/buttons/PrimaryButton';

export default function WorkAreaContainer() {
	const { projects } = useGlobalState((state) => state.Projects);
	const { select } = useActions((action) => action.Projects);

	// TODO Remove this page const
	const page: Page | undefined = projects[0]?.pages[0] || undefined;

	const [show, setShow] = React.useState(false);
	const [edit, setEdit] = React.useState({
		show: false,
		id: '',
	});

	const renderChild = (child: any) => {
		let htmlEle: any;
		switch (child.type) {
			case 'input':
				<>
					{edit.show && edit.id === child.id ? (
						<>
							<QuickBuild>
								<input style={child.styles} value={child.value} />
							</QuickBuild>
							<QuickBuild>
								<QuickBuild.Row>
									<QuickBuild.Title>
										<Button
											onClick={() => {
												setEdit({
													show: false,
													id: child.id,
												});
											}}
											type="submit"
											size="small"
											width="6rem"
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
							<QuickBuild.Previewer previewType="input" style={child.styles}>
								{child.value}
							</QuickBuild.Previewer>
							<QuickBuild.Button
								onClick={() => {
									setEdit({
										show: true,
										id: child.id,
									});
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
				</>;
				break;
			case 'text':
				htmlEle = (
					<>
						{edit.show && edit.id === child.id ? (
							<>
								<QuickBuild>
									<inputField.Input value={child.value} />
								</QuickBuild>
								<QuickBuild>
									<QuickBuild.Row>
										<QuickBuild.Title>
											<Button
												onClick={() => {
													setEdit({
														show: false,
														id: child.id,
													});
												}}
												type="submit"
												size="small"
												width="6rem"
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
										setEdit({
											show: true,
											id: child.id,
										});
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

			case 'button':
				htmlEle = (
					<>
						{edit.show && edit.id === child.id ? (
							<>
								<QuickBuild>
									<button style={child.styles} type="button">
										{child.value}
									</button>
								</QuickBuild>
								<QuickBuild>
									<QuickBuild.Row>
										<QuickBuild.Title>
											<Button
												onClick={() => {
													setEdit({
														show: false,
														id: child.id,
													});
												}}
												type="submit"
												size="small"
												width="6rem"
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
								<QuickBuild.Previewer previewType="button" style={child.styles}>
									{child.value}
								</QuickBuild.Previewer>
								<QuickBuild.Button
									onClick={() => {
										setEdit({
											show: true,
											id: child.id,
										});
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
			case 'image':
				htmlEle = (
					<>
						{edit.show && edit.id === child.id ? (
							<>
								<QuickBuild>
									<div style={child.styles} />
								</QuickBuild>
								<QuickBuild>
									<QuickBuild.Row>
										<QuickBuild.Title>
											<Button
												onClick={() => {
													setEdit({
														show: false,
														id: child.id,
													});
												}}
												type="submit"
												size="small"
												width="6rem"
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
								<QuickBuild.Previewer previewType="image" style={child.styles}>
									{child.value}
								</QuickBuild.Previewer>
								<QuickBuild.Button
									onClick={() => {
										setEdit({
											show: true,
											id: child.id,
										});
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
			default:
				return <div>nothing found 😟</div>;
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

	return (
		<WorkArea>
			<WorkArea.Board style={page?.styles}>
				<div style={page?.styles}>
					{page &&
						page?.children?.map((item) => {
							return (
								<>
									<WorkArea.Item
										style={item.styles}
										onClick={() => {
											select({ item, type: 'element' });
										}}
									>
										{renderNode(item)}
									</WorkArea.Item>
								</>
							);
						})}
				</div>
				<Button type="button">add me 😃</Button>
			</WorkArea.Board>
		</WorkArea>
	);
}
