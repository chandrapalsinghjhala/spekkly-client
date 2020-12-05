import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CreatePost from "../pages/create_post/CreatePost";
import Settings from "../pages/settings/Settings";
import Messages from "../pages/messages/Messages";
import UserPosts from "../pages/user_posts/UserPosts";
import PostDetails from "../post/PostDetails";
import TermsOfService from "../pages/terms_privacy/TermsOfService";
import Home from "../pages/home/Home";
import VerifyEmail from "../errors/VerifyEmail";
import About from "../pages/about/About";
import NoMatch from "../pages/errors/NoMatch";
import PrivacyPolicy from "../pages/terms_privacy/PrivacyPolicy";

const AppRouter = () => {
  const isLoggedIn = useSelector(
    ({ sessionState: { isLoggedIn } }) => isLoggedIn
  );

  return (
    <Switch>
      {isLoggedIn && (
        <Route
          exact
          path="/post"
          render={() => (
            <CreatePost title="Create Post" formTypeProp="create" />
          )}
        />
      )}
      {isLoggedIn && <Route exact path="/settings" component={Settings} />}
      {isLoggedIn && <Route exact path="/messages" component={Messages} />}
      {isLoggedIn && <Route exact path="/posts" component={UserPosts} />}
      <Route path="/terms-of-service" exact component={TermsOfService} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route
        path="/posts/edit/:id"
        render={(params) => (
          <CreatePost title="Edit Post" formTypeProp="edit" params={params} />
        )}
      />
      <Route
        path="/posts/:id"
        render={(params) => <PostDetails postSection="home" params={params} />}
      />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/users/verify-email" exact component={VerifyEmail} />
      <Route
        path="/users/reset_password"
        render={(params) => <Home resetPassword params={params} />}
      />
      <Route path="*">{isLoggedIn === false && <NoMatch />}</Route>
    </Switch>
  );
};

export default AppRouter;
