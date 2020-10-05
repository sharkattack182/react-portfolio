import React from "react";

function Contact() {
    return (
<section>
        <div className="box text-center">
            <h2><img src="https://fontmeme.com/permalink/201004/fe490e36f0e5b7a2f3d46fac10fdbf86.png" alt="font"/></h2>
            <form id="contact-form" method="post" action="contact.php">

                <div className="messages"></div>

                <div className="container controls">

                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label for="form_name"><strong>Firstname *</strong></label>
                                <input id="form_name" type="text" name="name" className="form-control"
                                    placeholder="Please enter your name *" required="required"
                                    data-error="Name is required."/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label for="form_email"><strong>Email *</strong></label>
                                <input id="form_email" type="email" name="email" className="form-control"
                                    placeholder="Please enter your email *" required="required"
                                    data-error="Valid email is required."/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label for="form_message"><strong>Message *</strong></label>
                                <textarea id="form_message" name="message" className="form-control"
                                    placeholder="Message for me *" rows="4" required="required"
                                    data-error="Please, leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="submit" class="btn btn-dark zoom btn-send"
                                value="Send message"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact;