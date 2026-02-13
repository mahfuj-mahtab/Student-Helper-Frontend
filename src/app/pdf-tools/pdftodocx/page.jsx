"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function PdfForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [docxUrl, setDocxUrl] = useState(null);

  const onSubmit = async (data) => {
    if (!data.file || data.file.length === 0) {
      alert("Please select a PDF file");
      return;
    }

    setLoading(true);
    setDocxUrl(null);

    const formData = new FormData();
    formData.append("pdf", data.file[0]);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/pdf-tools/pdf-to-doc/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const filePath = response.data.file;
      const fullUrl = `http://localhost:8000${filePath}`;
      setDocxUrl(fullUrl);
      reset();
    } catch (error) {
      console.error(error);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
          PDF to DOCX Converter
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Upload PDF File
            </span>

            <input
              type="file"
              accept="application/pdf"
              {...register("file")}
              className="mt-2 block w-full text-sm text-gray-600
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-medium
                         file:bg-blue-50 file:text-blue-600
                         hover:file:bg-blue-100
                         cursor-pointer"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg text-white font-medium transition 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Converting..." : "Convert to DOCX"}
          </button>
        </form>

        {docxUrl && (
          <div className="mt-6 text-center">
            <p className="text-green-600 font-medium mb-3">
              Conversion Successful 🎉
            </p>

            <a
              href={docxUrl}
              download="converted.docx"
              className="inline-block px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Download DOCX
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
