import * as React from 'react';

import { Link } from 'react-router-dom';
import plusIcon from '../../assets/icons/plus.svg';
const dashboardView = (props: any) => {
	const { bakeries } = props;
	return (
		<div>
			<div className="container">
				<h3 className="">Dashboard utilisateur auth</h3>
				<section className="card-container">
					<Link to="/user/bakery/create">
						<button
							className="clickable btn btn-primary"
							type="button"
						>
							<img
								src={plusIcon}
								alt="plusIcon"
								className="card-icon-new"
							/>
							Creer une boulangerie
						</button>
					</Link>
				</section>
				<section>{bakeries && bakeries.map(bakery)}</section>
			</div>
		</div>
	);
};

export default dashboardView;
