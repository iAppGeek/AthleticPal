import {Button, Jumbotron} from "react-bootstrap";
import React from "react";
import connect from "react-redux/es/connect/connect";

const MainBody = (props) => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Scroll Me</h1>
                        <p>
                            Phasellus scelerisque ante et odio egestas imperdiet.
                            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
                            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
                            Nunc non viverra est, ac ultricies leo.
                            Suspendisse dignissim eget sem a aliquet.
                            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
                            Aliquam dictum feugiat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userDataReducer
})

export default connect(
    mapStateToProps
)(MainBody);

