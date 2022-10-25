import React from 'react';

function Entry(props) {
    return(
        <div className="imoji-content">
            <dl className="dectionary">
                <div className="term">
                    <dt>
                        <span className="imoji" role="img" aria-label="smell face">
                            <img src={props.emoji} />
                        </span>
                        <span>{props.name}</span>
                    </dt>
                    <dd>
                        {props.meaning}
                    </dd>
                </div>
            </dl>
        </div>
    )
}

export default Entry;