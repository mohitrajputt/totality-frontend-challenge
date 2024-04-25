import style from "./Review.module.css";
import {feedbacks} from "../../db/db2";

function Review() {
    return (
        <section className={style.reviewSection} >
            {feedbacks.map((feedback, index) => (
                <div class={style.outerdiv} key={index} >
                <div class={style.innerdiv}>
                    <div class={style.eachdiv}>
                        <div class={style.userdetails}>
                            <div class={style.imgbox}>
                                <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" />
                            </div>
                            <div class={style.detbox}>
                                <p class={style.name}>{feedback.userName}</p>
                                <p class={style.designation}>{feedback.userEmail}</p>
                            </div>
                        </div>
                        <div class={style.review}>
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