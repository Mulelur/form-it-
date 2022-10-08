// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
import React from 'react';
import getStroke from 'perfect-freehand';
import { getSvgPathFromStroke } from '../utils';

type Props = {
	x: number;
	y: number;
	points: number[][];
	fill: string;
	isAnimated?: boolean;
	onPointerDown?: (e: React.PointerEvent) => void;
	stroke?: string;
};

export default function Path({
	x,
	y,
	isAnimated,
	onPointerDown,
	stroke,
	fill,
	points,
}: Props) {
	return (
		<path
			onPointerDown={onPointerDown}
			d={getSvgPathFromStroke(
				getStroke(points, {
					size: 16,
					thinning: 0.5,
					smoothing: 0.5,
					streamline: 0.5,
				})
			)}
			style={{
				transition: isAnimated ? 'transform 120ms linear' : '',
				transform: `translate(${x}px, ${y}px)`,
			}}
			x={0}
			y={0}
			fill={fill}
			stroke={stroke}
			strokeWidth={1}
		/>
	);
}
