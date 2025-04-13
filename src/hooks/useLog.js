import { useEffect } from "react";

export default function Ascii() {
  useEffect(() => {
    console.log(`
       ░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░      ░▒▓██████████████▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓████████▓▒░▒▓███████▓▒░  
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░░▒▓██████▓▒░        ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
                                                                                                                                           
                                                                                                                                           
                                                                                                                                      ░▒▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▒░
  
  System Log: J∆KE MILLER v1.0
  
  [*] - Launch Date:            04.13.2025
  [*] - Version....:            v1.0
  [*] - Frontend...:            SASS / PUG / GSAP / React.js / Lottie 
  [*] - API........:            Web3Forms
  
  [*] - Notes......:            I hate Apple, but in this case, it unintentionally aligns with 
                                my original concept. And if you’re wondering why the blur effect on 
                                page transitions works on Windows devices but doesn’t on Apple 
                                devices—just read the first words of this paragraph.
  
                                My portfolio and the concept behind it are about direct speech, about 
                                showing things as they truly are. The absence of blur actually
                                reinforcesthis idea because it reveals what’s really happening behind 
                                these transitions — the raw switch from one page to another. 
                                That’s why I decided not to "fix" this bug.
  
                                Which brings up a fair question—why didn’t I apply the same approach 
                                to Windows? Good question. Why indeed?

  
  ░▒▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▒░`);
  }, []);
}
