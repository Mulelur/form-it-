import React, { memo } from 'react';
import { useStorage } from '../../../../liveblocks.config';
import Ellipse from './Ellipse';
import Path from './Path';
import Rectangle from './Rectangle';
import { CanvasMode, LayerType } from '../types';
import { colorToCss } from '../utils';

type Props = {
	id: string;
	mode: CanvasMode;
	onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
	// eslint-disable-next-line react/require-default-props
	selectionColor?: string;
};

// eslint-disable-next-line react/display-name
const LayerComponent = memo(
	({ mode, onLayerPointerDown, id, selectionColor }: Props) => {
		const layer = useStorage((root: any) => root.layers.get(id));
		if (!layer) {
			// eslint-disable-next-line unicorn/no-null
			return null;
		}

		const isAnimated =
			mode !== CanvasMode.Translating && mode !== CanvasMode.Resizing;

		switch (layer.type) {
			case LayerType.Ellipse:
				return (
					<Ellipse
						id={id}
						layer={layer}
						onPointerDown={onLayerPointerDown}
						isAnimated={isAnimated}
						selectionColor={selectionColor}
					/>
				);
			case LayerType.Path:
				return (
					<Path
						key={id}
						points={layer.points}
						isAnimated={isAnimated}
						onPointerDown={(e) => onLayerPointerDown(e, id)}
						x={layer.x}
						y={layer.y}
						fill={layer.fill ? colorToCss(layer.fill) : '#CCC'}
						stroke={selectionColor}
					/>
				);
			case LayerType.Rectangle:
				return (
					<Rectangle
						id={id}
						layer={layer}
						onPointerDown={onLayerPointerDown}
						isAnimated={isAnimated}
						selectionColor={selectionColor}
					/>
				);
			default:
				// eslint-disable-next-line no-console
				console.warn('Unknown layer type');
				// eslint-disable-next-line unicorn/no-null
				return null;
		}
	}
);

export default LayerComponent;
