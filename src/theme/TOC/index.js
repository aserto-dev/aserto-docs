import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import TOC from "@theme-original/TOC";

const WrappedTOC = ({ toc, editUrl, ...props }) =>
  <div className="toc">
    <TOC toc={toc} {...props} />
    <BrowserOnly>
      {() => (
        <>
          <hr className="toc-separator" />
          <div className="toc-links toc-slack-icon">
            <img src="/icons/community-slack.svg" height="18" alt="join-slack" />
            <a
              href="https://www.aserto.com/slack"
              target="_blank"
              className="toc-community-slack"
            >
              Community Slack
            </a>
          </div>
          <div className="toc-links">
            <img src="/icons/google-meet.svg" height="20" alt="google-meet" />
            <a
              href="https://www.aserto.com/contact-engineer"
              target="_blank"
            >
              Speak to an engineer
            </a>
          </div>
        </>
      )}
    </BrowserOnly>
  </div>

export default WrappedTOC
