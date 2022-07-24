import React from "react";
import Footer from "./../Footer/Footer";
import Comments from "./../Comments/CommentList"
import Parse from "parse";

/* Home component is the default page location */
export default function Home() {
  return (
    <div>
    <section>
      {/* This is one of the routing pages and is designed to guide the user to the historical picks */}
      <h1 className="profile">What Person is This?</h1>
      <p>Log in then select "Quiz" to play the game</p>
    </section>
    <Footer />
    <div>
      {/* Logs user out on logout button press */}
          <button onClick={() => {
            alert("Logged out")
            Parse.User.logOut()
            }}> 
            Log out
          </button>
        </div>
    <div>
      <Comments />
    </div>
    </div>
  );
}