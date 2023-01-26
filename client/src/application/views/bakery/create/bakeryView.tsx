import * as React from 'react';

import plusIcon from '../../../assets/icons/plus.svg';
import userIcon from '../../../assets/icons/user.svg';
import chevronIcon from '../../../assets/icons/chevron-right.svg';
const createBakeryView = (props: any) => {
	const { onChange, onSubmit } = props;
	return (
		<div>
			<div className="container">
				<h3 className="text-center">
					Formulaire creation boulangerie ( application ){' '}
				</h3>
				<section>
					<form className="bakery-form" onSubmit={onSubmit}>
						<div className="">
							<img
								src={userIcon}
								alt="userIcon"
								className="login__icon"
							/>
							<input
								onChange={onChange}
								type="text"
								name="name"
								className=""
								placeholder="MyBakeryName"
								required
							/>
						</div>
						<div className="">
							<img
								src={userIcon}
								alt="userIcon"
								className="login__icon"
							/>
							<input
								onChange={onChange}
								type="text"
								name="address"
								className=""
								placeholder="MyBakeryAddress"
								required
							/>
						</div>
						<div className="">
							<img
								src={userIcon}
								alt="userIcon"
								className="login__icon"
							/>
							<input
								onChange={onChange}
								type="text"
								name="city"
								className=""
								placeholder="MyBakeryCity"
								required
							/>
						</div>
						<div className="">
							<img
								src={userIcon}
								alt="userIcon"
								className="login__icon"
							/>
							<input
								onChange={onChange}
								type="text"
								name="country"
								className=""
								placeholder="MyBakeryCountry"
								required
							/>
						</div>
						Voir pour demander un logo ou en mettre un par defaut
						<button className="button login__submit">
							<span className="button__text">Create</span>
							<img
								src={chevronIcon}
								alt="chevronIcon"
								className="button__icon"
							/>
						</button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default createBakeryView;
