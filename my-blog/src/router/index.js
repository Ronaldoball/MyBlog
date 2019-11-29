import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Sign from "@/views/Sign";
import Editor from "@/views/Editor";
import BlogContent from "@/views/BlogContent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      components: {
        main: Login
      }
    },
    {
      path: "/sign",
      name: "Sign",
      components: {
        main: Sign
      }
    },
    {
      path: "/index",
      name: "Index",
      components: {
        main: Home
      }
    },
    {
      path: "/editor",
      name: "Editor",
      components: {
        main: Editor
      }
    },
    {
      path: "/blogContent",
      name: "BlogContent",
      components: {
        main: BlogContent
      }
    }
  ]
});
