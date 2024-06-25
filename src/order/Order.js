export default function Order() {

    return (
        <section className="order">
            <div className="order__container container">
                <div className="order__wrapper">
                    <h2 className="order__title">Порядок в подарок</h2>
                    <p className="order__desc"> задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей</p>

                    <ul className="order__list">
                        <li className="order__item">обновляйте статус задачи </li>
                        <li className="order__item">следите за сроками дедлайнов</li>
                        <li className="order__item">отправляйте завершенные задачи в архив</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}