import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqUfaJ49FiWKTTgo6IcETMS2zEuDKFKMU",
  authDomain: "markdown-blog-7396e.firebaseapp.com",
  projectId: "markdown-blog-7396e",
  storageBucket: "markdown-blog-7396e.appspot.com",
  messagingSenderId: "45883163568",
  appId: "1:45883163568:web:913df0ec301d156c3c0c75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "blogs");

const get_home = (req, res) => {
  const blogs = [];
  getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        blogs.push({ ...doc.data() });
      });
      console.log(blogs);
      res.render("pages/index", { blogs });
    })
    .catch((err) => console.log(err));
};

const get_create_blog = (req, res) => {
  res.render("pages/createBlog");
};

const post_create_blog = (req, res) => {
  console.log(req.body);
};

export default {
  get_home,
  get_create_blog,
  post_create_blog,
};
