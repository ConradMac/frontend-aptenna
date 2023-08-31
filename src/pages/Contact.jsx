import "./../styles/Contact.css";

function Contact() {
    return (
        <div className="main-form-block">
            <div className="form-main">
                <div className="main-wrapper">
                    <h2 className="form-head">Contact Form</h2>
                    <form className="form-wrapper">
                        <div className="form-card">
                            <input className="form-input" type="text" name="full_name" required />
                            <label className="form-label" htmlFor="full_name">
                                Full Name
                            </label>
                        </div>

                        <div className="form-card">
                            <input className="form-input" type="email" name="email" required />
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                        </div>

                        <div className="form-card">
                            <input className="form-input" type="number" name="phone_number" required />
                            <label className="form-label" htmlFor="phone_number">
                                Phone Number
                            </label>
                        </div>

                        <div className="form-card">
                            <textarea
                                className="form-textarea"
                                maxLength="420"
                                rows="3"
                                name="address"
                                required
                            ></textarea>
                            <label className="form-textarea-label" htmlFor="address">
                                Address
                            </label>
                        </div>
                        <div className="btn-wrap">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
