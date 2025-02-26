//// Dynamically load the Clerk script
//const PUBLISH_KEY = "pk_test_ZmluZXItb3lzdGVyLTc3LmNsZXJrLmFjY291bnRzLmRldiQ";
//function loadClerkScript() {
//    const script = document.createElement("script");
//    script.async = true;
//    script.crossOrigin = "anonymous";
//    script.type = "text/javascript";
//    script.dataset.clerkPublishableKey = PUBLISH_KEY; // Replace with your actual publishable key
//    script.src = "https://finer-oyster-77.clerk.accounts.dev/npm/@clerk/clerk-js@5/dist/clerk.browser.js";

//    script.onload = () => {
//        console.log("Clerk script loaded successfully!");
//        window.Clerk.load({ publishableKey: "pkst_Z3LmNsZXJrLmFjY291bnRzLmRldiQ" }).then(() => {
//            if (window.Clerk) {
//                window.Clerk.openSignIn();
//            }
//        })

//    };

//    script.onerror = () => {
//        console.error("Failed to load the Clerk script.");
//    };

//    document.head.appendChild(script);
//};
//loadClerkScript();

//function sendOTP(mobileNumber) {
//    window.Clerk.load({ publishableKey: PUBLISH_KEY })
//        .then(() => {
//            return window.Clerk.signIn.create({
//                identifier: mobileNumber, // The phone number
//            });
//        })
//        .then((result) => {
//            console.log("OTP sent:", result);
//            // Proceed to OTP verification step
//        })
//        .catch((error) => {
//            console.error("Error sending OTP:", error);
//            // Show error message to the user
//        });
//}
//function verifyOTP(otp) {
//    if (!window.Clerk.signIn) {
//        console.error("Sign-in object is not initialized.");
//        return;
//    }

//    window.Clerk.signIn
//        .attemptFirstFactor({
//            strategy: "phone_code", // OTP authentication strategy
//            code: otp, // The OTP entered by the user
//        })
//        .then((result) => {
//            if (result.status === "complete") {
//                console.log("User authenticated:", result);
//                // Redirect or show success message
//            } else {
//                console.log("Verification pending:", result);
//                // Handle pending status if needed
//            }
//        })
//        .catch((error) => {
//            console.error("OTP verification failed:", error);
//            // Show error message to the user
//        });
//}


//    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//          // import {getAnalytics} from "https:www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
//    import {getAuth, signInWithPhoneNumber, RecaptchaVerifier} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

//    const firebaseConfig = {
//        apiKey: "AIzaSyDBYeMExridlGsFpr30DzMIViUTtyyrrGI",
//    authDomain: "college-final-year-408902.firebaseapp.com",
//    projectId: "college-final-year-408902",
//    storageBucket: "college-final-year-408902.firebasestorage.app",
//    messagingSenderId: "224165104368",
//    appId: "1:224165104368:web:503f85e3087bb0179f1035",
//    measurementId: "G-T5DMWMBEDY"
//            };

//    // Initialize Firebase
//    const app = initializeApp(firebaseConfig);
//    const auth = getAuth(app);

//    auth.languageCode = 'en';

//    function initializeRecaptcha() {
//            try {
//        window.recaptchaVerifier = new RecaptchaVerifier(auth,
//            "recaptcha-container", // ID of the container where reCAPTCHA will be rendered
//            {
//                size: "normal", // Options: "normal", "invisible", or "compact"
//                callback: (response) => {
//                    // reCAPTCHA solved
//                    console.log("reCAPTCHA verified.");
//                },
//                "expired-callback": () => {
//                    console.error("reCAPTCHA expired, please try again.");
//                }
//            }
//            // Pass the correct `auth` object here
//        );

//                // Render reCAPTCHA
//                window.recaptchaVerifier.render().then((widgetId) => {
//        console.log("reCAPTCHA rendered with widget ID:", widgetId);
//                });
//            } catch (error) {
//        console.error("Error initializing reCAPTCHA:", error);
//            }
//        }



    
//    function verifyCode() {
//            const code = "123456"; // Replace with verification code from user input
//    window.confirmationResult
//    .confirm(code)
//                .then((result) => {
//                    // User signed in successfully
//                    const user = result.user;
//    console.log("User signed in:", user);
//                })
//                .catch((error) => {
//        console.error("Error verifying code:", error);
//                });
//}
//document.addEventListener("DOMContentLoaded", () => {
//    initializeRecaptcha();
//});




