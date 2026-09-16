/** Lets the header open the floating chat without threading state through the page. */
export const OPEN_RECRUITER_CHAT = "open-recruiter-chat";

export function openRecruiterChat() {
  window.dispatchEvent(new CustomEvent(OPEN_RECRUITER_CHAT));
}
