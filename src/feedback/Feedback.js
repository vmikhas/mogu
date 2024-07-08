export default function Feedback ({ title }) {
	return (
		<section className="feedback" id="feedback">
			<div className="feedback__container container">
				<form className="feedback__form" action="#" method="POST">
					<fieldset className="feedback__form-group">
						<legend className="feedback__title">{title}</legend>
						<input className="feedback__input" type="email" name="e-mail" placeholder="Электронная почта" required />
						<textarea className="feedback__textarea" name="comment" id="comment" placeholder="О чем хотите расссказать?" />
					</fieldset>
					<button className="feedback__button" type="button">отправить ⟶</button>
				</form>
			</div>
		</section>
	);
};