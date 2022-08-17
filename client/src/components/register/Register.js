import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './Register.scss';

export const Register = (params) => {
    return (
        <>
            <Breadcrumb
                title="Register"
                secondaryTitle="Sign up for an account here"
            />

            <FormWrapper title="Register">
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
