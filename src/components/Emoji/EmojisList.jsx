import { useState, useEffect } from "react";

export const Emojis = [
  { symbol: "✌", shortcut: ":v" },
  { symbol: "😂", shortcut: ":D" },
  { symbol: "😝", shortcut: ":P" },
  { symbol: "😁", shortcut: ":)" },
  { symbol: "😱", shortcut: ":O" },
  { symbol: "👉", shortcut: ":>" },
  { symbol: "🙌", shortcut: "\\o/" },
  { symbol: "🍻", shortcut: ":cheers:" },
  { symbol: "🔥", shortcut: ":fire:" },
  { symbol: "🌈", shortcut: ":rainbow:" },
  { symbol: "☀", shortcut: ":sun:" },
  { symbol: "🎈", shortcut: ":balloon:" },
  { symbol: "🌹", shortcut: ":rose:" },
  { symbol: "💄", shortcut: ":lipstick:" },
  { symbol: "🎀", shortcut: ":ribbon:" },
  { symbol: "⚽", shortcut: ":soccer:" },
  { symbol: "🎾", shortcut: ":tennis:" },
  { symbol: "🏁", shortcut: ":checkered_flag:" },
  { symbol: "😡", shortcut: ":angry:" },
  { symbol: "👿", shortcut: ":devil:" },
  { symbol: "🐻", shortcut: ":bear:" },
  { symbol: "🐶", shortcut: ":dog:" },
  { symbol: "🐬", shortcut: ":dolphin:" },
  { symbol: "🐟", shortcut: ":fish:" },
  { symbol: "🍀", shortcut: ":clover:" },
  { symbol: "👀", shortcut: ":eyes:" },
  { symbol: "🚗", shortcut: ":car:" },
  { symbol: "🍎", shortcut: ":apple:" },
  { symbol: "💝", shortcut: ":gift_heart:" },
  { symbol: "💙", shortcut: ":blue_heart:" },
  { symbol: "👌", shortcut: ":ok_hand:" },
  { symbol: "❤", shortcut: ":heart:" },
  { symbol: "😍", shortcut: ":heart_eyes:" },
  { symbol: "😉", shortcut: ":wink:" },
  { symbol: "😓", shortcut: ":sweat_smile:" },
  { symbol: "😳", shortcut: ":flushed:" },
  { symbol: "💪", shortcut: ":muscle:" },
  { symbol: "💩", shortcut: ":poop:" },
  { symbol: "🍸", shortcut: ":cocktail:" },
  { symbol: "🔑", shortcut: ":key:" },
  { symbol: "💖", shortcut: ":sparkling_heart:" },
  { symbol: "🌟", shortcut: ":star2:" },
  { symbol: "🎉", shortcut: ":tada:" },
  { symbol: "🌺", shortcut: ":hibiscus:" },
  { symbol: "🎶", shortcut: ":notes:" },
  { symbol: "👠", shortcut: ":high_heel:" },
  { symbol: "🏈", shortcut: ":football:" },
  { symbol: "⚾", shortcut: ":baseball:" },
  { symbol: "🏆", shortcut: ":trophy:" },
  { symbol: "👽", shortcut: ":alien:" },
  { symbol: "💀", shortcut: ":skull:" },
  { symbol: "🐵", shortcut: ":monkey_face:" },
  { symbol: "🐮", shortcut: ":cow:" },
  { symbol: "🐩", shortcut: ":poodle:" },
  { symbol: "🐎", shortcut: ":racehorse:" },
  { symbol: "💣", shortcut: ":bomb:" },
  { symbol: "👃", shortcut: ":nose:" },
  { symbol: "👂", shortcut: ":ear:" },
  { symbol: "🍓", shortcut: ":strawberry:" },
  { symbol: "💘", shortcut: ":cupid:" },
  { symbol: "💜", shortcut: ":purple_heart:" },
  { symbol: "👊", shortcut: ":facepunch:" },
  { symbol: "💋", shortcut: ":kiss:" },
  { symbol: "😘", shortcut: ":kissing_heart:" },
  { symbol: "😜", shortcut: ":stuck_out_tongue_winking_eye:" },
  { symbol: "😵", shortcut: ":dizzy_face:" },
  { symbol: "🙏", shortcut: ":pray:" },
  { symbol: "👋", shortcut: ":wave:" },
  { symbol: "🚽", shortcut: ":toilet:" },
  { symbol: "💃", shortcut: ":dancer:" },
  { symbol: "💎", shortcut: ":gem:" },
  { symbol: "🚀", shortcut: ":rocket:" },
  { symbol: "🌙", shortcut: ":crescent_moon:" },
  { symbol: "🎁", shortcut: ":gift:" },
  { symbol: "⛄", shortcut: ":snowman:" },
  { symbol: "🌊", shortcut: ":ocean:" },
  { symbol: "⛵", shortcut: ":sailboat:" },
  { symbol: "🏀", shortcut: ":basketball:" },
  { symbol: "🎱", shortcut: ":8ball:" },
  { symbol: "💰", shortcut: ":moneybag:" },
  { symbol: "👶", shortcut: ":baby:" },
  { symbol: "👸", shortcut: ":princess:" },
  { symbol: "🐰", shortcut: ":rabbit:" },
  { symbol: "🐷", shortcut: ":pig:" },
  { symbol: "🐍", shortcut: ":snake:" },
  { symbol: "🐫", shortcut: ":camel:" },
  { symbol: "🔫", shortcut: ":gun:" },
  { symbol: "👄", shortcut: ":lips:" },
  { symbol: "🚲", shortcut: ":bike:" },
  { symbol: "🍉", shortcut: ":watermelon:" },
  { symbol: "💛", shortcut: ":yellow_heart:" },
  { symbol: "💚", shortcut: ":green_heart:" },
];

export function EmojisList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSymbol, setCopiedSymbol] = useState(null);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const handleCopyToClipboard = (symbol) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCopiedSymbol(null);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copiedSymbol]);

  const filteredEmojis = Emojis.filter(({ symbol, shortcut }) =>
    [symbol, shortcut].some((text) => text.includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="EmojiSearch">
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {copiedSymbol && (
        <div className="copy-message">Copied: {copiedSymbol}</div>
      )}
      <div className="emoji-list">
        {filteredEmojis.map(({ symbol }, index) => (
          <span
            key={index}
            className="emoji"
            onClick={() => handleCopyToClipboard(symbol)}
            style={{ cursor: "pointer" }}
          >
            {symbol}
          </span>
        ))}
      </div>
    </div>
  );
}
