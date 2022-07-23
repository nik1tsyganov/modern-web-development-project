import React from "react";

// AuthForm is a child component that allows user to input personal information for account register/login
const AuthForm = ({ user, onChange, onSubmit, onClick }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div>
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
        <br />
        <div>
          <button onClick={onClick}>
            Go back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
