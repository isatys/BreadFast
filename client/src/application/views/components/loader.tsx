import * as React from 'react';

const loader = () => {
	return (
		<div className="row col-lg-12 justify-content-center">
			<div className="spinner-border " role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default loader;
