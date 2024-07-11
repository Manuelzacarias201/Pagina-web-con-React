import React from "react";

const Span = ({round, date}) => {
    return (
        <>
            <span className="round-number">{round}</span>
            <span className="dates">{date}</span>
        </>
    )
}
export default Span