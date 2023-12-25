import cl from './MainPage.module.scss'
import quizLogo from '../../assets/images/mainPageQuiz.jpg';
const MainPage = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.content__quiz}>
                    <img src={quizLogo} alt="quiz"/>
                </div>
                <div className={cl.info}>
                    <div className={cl.info__about}>
                        <p>Ласкаво просимо, не будемо вдаватися у подробиці, оскільки цей сайт, це один з багатьох подібних
                        сайтій, який нічим особливим не відрізняється, його ціль була у тому щоб дати студентам можливість
                            створювати свої картки для тестів та ділитися ними безкоштовно. На цьому сайті вам не потрібно буде
                            сплачувати за проходження вже створених тестів, та тому подібне.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;