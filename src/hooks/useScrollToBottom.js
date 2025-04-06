import { useEffect } from "react";
export default function useScrollToBottom() {
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);
}
