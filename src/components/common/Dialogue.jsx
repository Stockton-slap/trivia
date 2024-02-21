// import React from "react";

// export default function Dialogue({}) {
//   const isCharacterI = correctAnswer.startsWith("Character I:");
//   const isCharacterII = correctAnswer.startsWith("Character II:");
//   const isDialogue = isCharacterI || isCharacterII;
//   const splitQuote = questionItem.quote.split("\n");

//   return (
//     <ul>
//       {splitQuote.map((item) => {
//         const [character, dialogue] = item.split(":");

//         return (
//           <li key={index} className={`flex items-center`}>
//             <p
//               className={`${
//                 (isCharacterI || isCharacterII) && "font-bold"
//               } text-sm text-start`}
//             >
//               {`${character}:`}
//             </p>
//             <p className="ml-[8px] text-xs italic">{dialogue}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
