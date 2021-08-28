import { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { colors } from "../helpers/theme";

const URL = "https://0xinventory.app/adventurer";

const style = {
  button: {
    marginLeft: 16,
    marginRight: 16,
    padding: "4px 8px",
    color: colors.white,
    background: colors.blue,
    cursor: "pointer",
    border: 0,
  },
  copied: {
    color: colors.blue,
  },
};

function Share({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  // clear copy if address changes
  useEffect(() => setCopied(false), [address]);

  return (
    <div>
      <CopyToClipboard
        text={`${URL}/${address}`}
        onCopy={() => setCopied(true)}
      >
        <button style={style.button}>Share</button>
      </CopyToClipboard>

      {copied ? <span style={style.copied}>Copied to Clipboard</span> : null}
    </div>
  );
}

export default Share;
