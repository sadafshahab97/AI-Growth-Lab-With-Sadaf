"use client"; // Agar aap Next.js App Router (app directory) use kar rahi hain

import React, { useRef } from "react";

export default function RichEditor() {
  // TypeScript ko batane k liye ke ye ref ek HTML div element ko target karega
  const editorRef = useRef<HTMLDivElement>(null);

  // Formatting function jahan command aur value ke types defined hain
  const formatText = (command: string, value: string = ""): void => {
    if (typeof window !== "undefined") {
      document.execCommand(command, false, value);
      editorRef.current?.focus(); // Safely focus back to editor
    }
  };

  const handleSave = (): void => {
    if (editorRef.current) {
      // Blog ka sara data HTML string ki surat mein milega
      const blogContent: string = editorRef.current.innerHTML;
      console.log("Saved Blog Content (HTML):", blogContent);

      // Aap is blogContent string ko backend api ya database mein bhej sakti hain
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "600px",
        backgroundColor: "#fff",
      }}
    >
      {/* 1. Toolbar Section */}
      <div
        style={{
          borderBottom: "1px solid #eee",
          paddingBottom: "8px",
          marginBottom: "12px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {/* Bold, Italic, Underline */}
        <button
          type="button"
          onClick={() => formatText("bold")}
          style={{ fontWeight: "bold", padding: "4px 12px", cursor: "pointer" }}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => formatText("italic")}
          style={{
            fontStyle: "italic",
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => formatText("underline")}
          style={{
            textDecoration: "underline",
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          U
        </button>

        {/* Headings */}
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<h2>")}
          style={{ padding: "4px 8px", cursor: "pointer", fontWeight: "600" }}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<h3>")}
          style={{ padding: "4px 8px", cursor: "pointer", fontWeight: "500" }}
        >
          H2
        </button>

        {/* Lists */}
        <button
          type="button"
          onClick={() => formatText("insertUnorderedList")}
          style={{ padding: "4px 8px", cursor: "pointer" }}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => formatText("insertOrderedList")}
          style={{ padding: "4px 8px", cursor: "pointer" }}
        >
          1. List
        </button>
      </div>

      {/* 2. Content Editable Written Place */}
      <div
        ref={editorRef}
        contentEditable={true}
        suppressContentEditableWarning={true} // React ka warning hide karne k liye kyunki innerHTML change hoga
        style={{
          minHeight: "250px",
          outline: "none",
          padding: "12px",
          border: "1px solid #f0f0f0",
          borderRadius: "4px",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      />

      <hr style={{ margin: "16px 0", borderColor: "#eee" }} />

      {/* 3. Action Button */}
      <button
        type="button"
        onClick={handleSave}
        style={{
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Save Blog
      </button>
    </div>
  );
}
