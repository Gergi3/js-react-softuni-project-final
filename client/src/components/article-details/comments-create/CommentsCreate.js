import './CommentsCreate.scss'

export const CommentsCreate = () => {
    return (
        <div className="comment-template">
            <h4>Leave a comment</h4>
            <p>
                If you have a comment dont feel hesitate to send us your
                opinion.
            </p>
            <form action="index.html">
                <p>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                </p>
                <p>
                    <textarea
                        name="comment"
                        id="comment"
                        cols={30}
                        rows={10}
                        placeholder="Your Message"
                        defaultValue={""}
                    />
                </p>
                <p>
                    <input type="submit" defaultValue="Submit" />
                </p>
            </form>
        </div>
    );
};
