"use client";

import React, { useRef } from "react";

export default function RichEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  const formatText = (command: string, value: string = ""): void => {
    if (typeof window !== "undefined") {
      document.execCommand(command, false, value);
      editorRef.current?.focus();
    }
  };

  const handleSave = (): void => {
    if (editorRef.current) {
      const blogContent: string = editorRef.current.innerHTML;
      console.log("Saved Blog Content (HTML):", blogContent);
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
        suppressContentEditableWarning={true} 
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
