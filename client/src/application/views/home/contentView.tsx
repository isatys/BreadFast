import * as React from 'react';

function ContentView({ children }: { children: React.ReactElement }) {
	return (
		<div className="body-color">
			<div className="m2">{children}</div>
		</div>
	);
}

export default ContentView;
