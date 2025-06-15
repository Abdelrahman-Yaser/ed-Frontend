"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function EditPostPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="text-center mt-10 text-2xl">
      Editing Post ID: <strong>{id}</strong>
    </div>
  );
}
