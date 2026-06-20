import { Fragment } from "react";

/**
 * Lightweight architecture diagram built from styled HTML (not an image) so it
 * stays responsive, theme-aware, accessible, and selectable. Horizontal flow on
 * desktop, vertical stack on mobile.
 */
function Pipeline({
  nodes,
  caption,
  annotations,
}: {
  nodes: string[];
  caption: string;
  annotations?: string[];
}) {
  return (
    <figure className="rounded-lg border border-border bg-surface p-4 sm:p-6">
      <div
        role="img"
        aria-label={caption}
        className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center"
      >
        {nodes.map((node, i) => (
          <Fragment key={node}>
            <div className="flex flex-1 items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-center font-mono text-xs text-foreground">
              {node}
            </div>
            {i < nodes.length - 1 && (
              <span aria-hidden className="self-center text-subtle">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </Fragment>
        ))}
      </div>
      {annotations && annotations.length > 0 && (
        <ul className="mt-4 space-y-1">
          {annotations.map((a) => (
            <li key={a} className="font-mono text-xs text-subtle">
              {a}
            </li>
          ))}
        </ul>
      )}
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}

export function ArchDiagram({ variant }: { variant: "emma" | "intake" }) {
  if (variant === "emma") {
    return (
      <Pipeline
        caption="Devices publish presence over MQTT/TLS to a presence and routing service, which drives a call state machine; a logical user can own multiple devices that routing tries in priority order."
        nodes={[
          "Devices (A · B · C)",
          "MQTT over TLS",
          "Presence + routing",
          "Call state machine",
        ]}
        annotations={[
          "TTL-expiring presence → fails toward 'unavailable'",
          "multi-device fallback in priority order",
        ]}
      />
    );
  }

  return (
    <Pipeline
      caption="A conversation transcript is extracted by an LLM into output validated against a strict schema, then emitted as structured data; a secondary model backs up the primary and every step is audit-logged."
      nodes={[
        "Conversation",
        "LLM extraction",
        "Schema validation",
        "Structured output",
      ]}
      annotations={[
        "↺ model fallback on error / timeout / low confidence",
        "audit log written at every step",
      ]}
    />
  );
}
