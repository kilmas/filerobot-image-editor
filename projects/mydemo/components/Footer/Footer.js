import React, { Component } from "react";
import {
  FooterWrapper,
  FooterTop,
  Title,
  ShareActions,
  ToolbarWrapper,
  CancelBtn,
  Button,
  CloseBtn,
  ApplyBtn
} from "../../styledComponents";
import { Toolbar } from "../";

export default class extends Component {
  render() {
    const {
      activeTab,
      onRevert,
      apply,
      onClose,
      showGoBackBtn,
      processWithCloudService,
      processWithFilerobot,
      handleSave,
      activeBody,
      t,
      config,
    } = this.props;
    const { tools } = config;
    const isOneTool = tools.length === 1;
    const filteredName = activeTab === "rotate" ? "orientation" : activeTab;
    const onFinishButtonLabel =
      !processWithCloudService && !processWithFilerobot
        ? t["toolbar.share"]
        : t["toolbar.save"];
    const applyAndSave = () => {
      apply(handleSave);
    };

    return (
      <FooterWrapper>
        <FooterTop>
          <Title>
            {t[`toolbar.${filteredName}`] || t[`header.image_editor_title`]}
          </Title>
          <CloseBtn onClick={onClose} />
        </FooterTop>

        <ToolbarWrapper overlayYHidden={activeTab !== "watermark"}>
          {/* <LeftActions>

          </LeftActions> */}

          <Toolbar {...this.props} />
        </ToolbarWrapper>
        {activeBody === "preview" && (
          <ShareActions>
            <CancelBtn
              hide={!activeTab}
              onClick={isOneTool ? onClose : onRevert}
              md
              default
            >
              {t[`toolbar.cancel`]}
            </CancelBtn>
            {showGoBackBtn && (
              <CancelBtn hide={activeTab} onClick={onClose} sm default>
                {t[`toolbar.go_back`]}
              </CancelBtn>
            )}
            {!activeTab ? (
              <Button
                themeColor
                md
                success
                themeBtn={activeTab}
                fullSize
                onClick={
                  isOneTool
                    ? applyAndSave
                    : !activeTab
                    ? () => {
                        handleSave();
                      }
                    : () => {
                        apply();
                      }
                }
              >
                {onFinishButtonLabel}
              </Button>
            ) : (
              <ApplyBtn
                themeColor
                md
                themeBtn={activeTab}
                onClick={
                  isOneTool
                    ? applyAndSave
                    : !activeTab
                    ? () => {
                        handleSave();
                      }
                    : () => {
                        apply();
                      }
                }
              >
                {t["toolbar.apply"]}
              </ApplyBtn>
            )}
          </ShareActions>
        )}
      </FooterWrapper>
    );
  }
}
