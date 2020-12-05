import React from "react"
import {connect} from 'react-redux'

import {SideNavCheckMark, SideNavItemContainer, SideNavItemText} from "../../page_nav/sideNav";
import checkbox from "../../../assets/icons/checkbox.svg";
import {createPostNavTitles} from "../../../config/constants";

const CreatePostNavItems = props => (
    <div>
        {createPostNavTitles.map((title, index) =>
            <SideNavItemContainer key={title.toLowerCase()}
                                  active={props.activeNavIndex === index}>
                <SideNavItemText completed={props.activeNavIndex > index}
                                 active={props.activeNavIndex === index}> {title}
                </SideNavItemText>
                {props.completed ? <SideNavCheckMark src={checkbox}/> : ""}
            </SideNavItemContainer>
        )}
    </div>
)

const mapStateToProps = ({createPostState}) => ({
    activeNavIndex: createPostState.activeNavIndex
})

export default connect(mapStateToProps)(CreatePostNavItems)