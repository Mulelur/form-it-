import * as React from 'react';

type Props = {
	style: React.CSSProperties;
};

const FormItEdit = (props: Props) => {
	const { style } = props;

	return (
		<>
			<svg
				width="24"
				height="24"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={style}
			>
				<path
					d="M22.9167 8.33333H8.33334C7.22827 8.33333 6.16846 8.77231 5.38706 9.55372C4.60566 10.3351 4.16667 11.3949 4.16667 12.5V41.6667C4.16667 42.7717 4.60566 43.8315 5.38706 44.6129C6.16846 45.3943 7.22827 45.8333 8.33334 45.8333H37.5C38.6051 45.8333 39.6649 45.3943 40.4463 44.6129C41.2277 43.8315 41.6667 42.7717 41.6667 41.6667V27.0833"
					stroke="black"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M38.5417 5.20833C39.3705 4.37953 40.4946 3.91391 41.6667 3.91391C42.8388 3.91391 43.9629 4.37953 44.7917 5.20833C45.6205 6.03713 46.0861 7.16122 46.0861 8.33333C46.0861 9.50543 45.6205 10.6295 44.7917 11.4583L25 31.25L16.6667 33.3333L18.75 25L38.5417 5.20833Z"
					stroke="black"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default FormItEdit;
