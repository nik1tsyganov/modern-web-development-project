import React from "react";
import Footer from "./../Footer/Footer";
import Parse from "parse";

/* Home component is the default page location */
export default function Home() {
  return (
    <div>
    <section>
      {/* This is one of the routing pages and is designed to guide the user to the historical picks */}
      <h1>What Person is This?</h1>
      <p>Select a category to play the game:</p>
    </section>
    <Footer />
    <div>
          <button onClick={() => Parse.User.logOut()}>
            Log out
          </button>
        </div>
    </div>
  );
}