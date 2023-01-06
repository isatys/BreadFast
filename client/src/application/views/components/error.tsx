import * as React from 'react';

const error = (props: any) => {
	const { error } = props;
	return (
		<section className="warning">
			<div className="m-3">{error}</div>
		</section>
	);
};

export default error;
