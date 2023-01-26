import * as React from 'react';
import { Link } from 'react-router-dom';
function ValidateUserEmailView(props: any) {
	const { errorValidate, isValidate } = props;
	return (
		<section className="form-container p-30">
			{errorValidate && (
				<section className="warning">
					<div>{errorValidate}</div>
				</section>
			)}
			{isValidate && (
				<section className="success">
					<div>
						Compte validé ! &#160;
						<Link to="/login" className="underline">
							Se connecter ici
						</Link>
					</div>
				</section>
			)}
		</section>
	);
}
export default ValidateUserEmailView;
