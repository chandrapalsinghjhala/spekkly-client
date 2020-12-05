import React, { useState, useEffect } from "react";
import Measure from "react-measure";
import axios from "../../../../axios";
import { useSelector } from "react-redux";
import onClickOutside from "react-onclickoutside";

import { OptionsContainer } from "../../../options/option_styles";
import {
  EmojiItem,
  EmojiItemsContainer,
  EmojiSelectorContainer,
  EmojiSelectorItems,
  EmojiSelectorItem,
  EmojiOuterContainer,
} from "./styles/emoji_option_styles";
import { Center } from "../../../alignment/Center";
import Loading from "../../../loading/Loading";

const EmojiContainer = (props) => {
  const assetState = useSelector(({ assetState }) => assetState);
  const [emojis, setEmojis] = useState([]);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const getEmojis = async () => {
    const { data } = await axios.get(assetState.EMOJIS_NESTED_LIST);
    setEmojis([...data]);
  };

  EmojiContainer.handleClickOutside = () => props.hideOptions();

  useEffect(() => {
    getEmojis();
  }, []);

  return (
    <Measure bounds onResize={({ bounds: { height } }) => setHeight(height)}>
      {({ measureRef }) => (
        <OptionsContainer
          ref={measureRef}
          bottomArrow
          height={height}
          emojiContainer
        >
          <EmojiOuterContainer>
            {emojis.length === 0 && <Loading solidBackground />}

            <EmojiItemsContainer>
              {emojis.length > 0 &&
                emojis[activeIndex].subgroups.map((subgroup) =>
                  subgroup.emojis.map((emoji) => (
                    <Center vertical key={emoji.codes}>
                      <EmojiItem onClick={() => props.addEmoji(emoji.char)}>
                        {emoji.char}
                      </EmojiItem>
                    </Center>
                  ))
                )}
            </EmojiItemsContainer>
            <EmojiSelectorContainer>
              <EmojiSelectorItems>
                {emojis.length > 0 &&
                  emojis.map((group, index) => (
                    <Center
                      key={group.subgroups[0].emojis[0].codes}
                      onClick={() => setActiveIndex(index)}
                      vertical
                    >
                      <EmojiSelectorItem active={index === activeIndex}>
                        {group.subgroups[0].emojis[0].char}
                      </EmojiSelectorItem>
                    </Center>
                  ))}
              </EmojiSelectorItems>
            </EmojiSelectorContainer>
          </EmojiOuterContainer>
        </OptionsContainer>
      )}
    </Measure>
  );
};

EmojiContainer.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => EmojiContainer.handleClickOutside,
};

export default onClickOutside(EmojiContainer, clickOutsideConfig);
