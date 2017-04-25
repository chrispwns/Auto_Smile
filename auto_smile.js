/*
 * auto_smile.js
 * an addon/extension that will redirect the user to an amazon smile link
 * instead of the standard amazon page when logged in.
 */


/*
 * Redirects www.amazon.com/some_item to smile.amazon.com/some_item
 */
function redirect() {
    "use strict";
    var url = window.location.href;
    window.location = url.replace(/www/, "smile");
}


/*
 * If the user is signed in to amazon call the redirect function.
 *
 * note: amazon requires sign-in to use smile, so if the user isn't
 * it will just send them back to the amazon page causing an endless
 * reloading loop from the smile page to the normal page.
 * For this reason the addon won't do anything when the user isn't signed in.
 */
function isSignedIn() {
    "use strict";
    // amazon has a login greeting "Hello, name" this is the name.
    var name = document.body.getElementsByClassName("nav-line-3")[0];

    // if the element does exist and isn't the sign in message, redirect.
    if (name && name.textContent !== "Sign in") {
        redirect();
    }
    // TODO: add a non-intrusive alert telling the user
    // they need to sign in if they aren't already.
}

isSignedIn();