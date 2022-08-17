import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './Login.scss';

export const Login = (params) => {
    return (
        <>
            <Breadcrumb
                title="Login"
                secondaryTitle="Sign into your account here"
            />

            <FormWrapper title="Login">
                <form>
                    <p>
                        <input type="text" placeholder="Name" />
                    </p>
                    <p>
                        <input type="email" placeholder="Email" />
                    </p>
                    <p>
                        <input type="number" placeholder="Address" />
                    </p>
                    <p>
                        <input type="tel" placeholder="Phone" />
                    </p>
                    <p>
                        <textarea
                            name="bill"
                            id="bill"
                            cols={30}
                            rows={10}
                            placeholder="Say Something"
                            defaultValue={""}
                        />
                    </p>
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            defaultValue="Submit"
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
