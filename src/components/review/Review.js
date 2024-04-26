import style from "./Review.module.css";
import {feedbacks} from "../../db/db2";

function Review() {
    return (
        <section className={style.reviewSection} >
            {feedbacks.map((feedback, index) => (
                <div className={style.outerdiv} key={index} >
                <div className={style.innerdiv}>
                    <div className={style.eachdiv}>
                        <div className={style.userdetails}>
                            <div className={style.imgbox}>
                                <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="U" />
                            </div>
                            <div className={style.detbox}>
                                <p className={style.name}>{feedback.userName}</p>
                                <p className={style.designation}>{feedback.userEmail}</p>
                            </div>
                        </div>
                        <div className={style.review}>
                            <p>“{feedback.feedbackMsg}”</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Review;