import type { ComponentProps } from "react";

// Adapted from shadcn/ui Card (MIT); Tailwind utilities are expressed in local CSS.
// Fixed source and full license: ../third-party/shadcn-ui/.
export function Card({ className = "", ...props }: ComponentProps<"div">) {
  return <div data-slot="card" className={`cc-card ${className}`} {...props} />;
}

// Adapted from Prompt Kit's non-highlight PromptSuggestion (MIT).
// Native button preserves the existing draft-only action; see ../third-party/prompt-kit/.
export function PromptSuggestion({ className = "", ...props }: ComponentProps<"button">) {
  return <button type="button" className={`cc-prompt-suggestion ${className}`} {...props} />;
}
