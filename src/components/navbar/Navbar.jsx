import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Measure from "react-measure";
import Media from "react-media";
import MobileMenu from "react-hamburger-menu";

import { tabLandDown } from "../media/media_helpers";
import { StandardContainer } from "../containers/container";
import LoggedInOptions from "./LoggedInOptions";
import NotLoggedInOptions from "./NotLoggedInOptions";
import { navbarHeight } from "../../redux/actions/navbar_actions";
import MobileNav from "./MobileNav";
import {
  InnerNavContainer,
  NavLinkContainer,
  NavLogo,
} from "./navbar_styles/navbar_styles";
import FilledButton from "../buttons/FilledButton";
import { isSignUpOpen } from "../../redux/actions/login_actions";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isLoggedIn = useSelector(
    ({ sessionState: { isLoggedIn } }) => isLoggedIn
  );
  const logo = useSelector(({ assetState: { SPEKKLY_LOGO } }) => SPEKKLY_LOGO);
  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location]);

  return (
    <div>
      <Measure
        bounds
        onResize={(contentRect) => {
          dispatch(navbarHeight(contentRect.bounds.height));
        }}
      >
        {({ measureRef }) => (
          <StandardContainer ref={measureRef} nav>
            <InnerNavContainer dataLoaded={props.dataLoaded}>
              <Link to="/">
                <NavLogo src={logo} />
              </Link>

              <NavLinkContainer>
                <Media query={tabLandDown}>
                  {(matches) =>
                    matches ? (
                      <>
                        {isLoggedIn && (
                          <>
                            <MobileMenu
                              isOpen={mobileNavOpen}
                              menuClicked={() => {
                                setMobileNavOpen(!mobileNavOpen);
                              }}
                              width={26}
                              height={18}
                              strokeWidth={3}
                              rotate={0}
                              color="black"
                              borderRadius={1}
                              animationDuration={0.5}
                            />

                            {mobileNavOpen && <MobileNav />}
                          </>
                        )}

                        {!isLoggedIn && (
                          <FilledButton
                            buttonText={"Get Started"}
                            onClick={() => dispatch(isSignUpOpen(true))}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {isLoggedIn && <LoggedInOptions />}

                        {!isLoggedIn && <NotLoggedInOptions />}
                      </>
                    )
                  }
                </Media>
              </NavLinkContainer>
            </InnerNavContainer>
          </StandardContainer>
        )}
      </Measure>
    </div>
  );
};

export default Navbar;
