import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div>
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="online-users">
              {/* Check notifications if it exists then map through */}
              {/* Note that "item" is not a strict variable, name it whatever you want */}
              {notifications &&
                notifications.map(item => {
                  return (
                    <li key={item.id}>
                      <span className="pink-text">{item.user} </span>
                      <span>{item.content}</span>
                      <div className="note-date grey-text">
                        {moment(item.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
