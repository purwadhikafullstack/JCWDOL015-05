import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";

interface FieldImageProps {
  name: string;
  label?: string;
  formik: FormikProps<any>;
  className?: string;
  value?: string;
  initialImage?: string; // Added to pass initial fetched image
}

export const FormFieldImage: React.FC<FieldImageProps> = ({
  name,
  label,
  formik,
  className,
  value,
  initialImage, // Receive the initial image
}) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialImage || null); // Initialize with the fetched image

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      formik.setFieldValue(name, file);
    }
  };

  const handleResetImg = () => {
    if (imgRef.current) {
      imgRef.current.value = "";
      setPreviewUrl(null); // Reset the preview URL when the image is removed
    }
  };

  useEffect(() => {
    if (initialImage) {
      setPreviewUrl(initialImage); // Update the preview URL when initialImage is loaded
    }
  }, [initialImage]);

  return (
    <div>
      <label htmlFor={name} className="">{label}</label>
      <input
        type="file"
        id={name}
        name={name}
        className={`hidden`}
        ref={imgRef}
        onChange={handleChange}
        value={value}
      />
      {!previewUrl && (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-[100px] justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          +
        </div>
      )}
      {previewUrl && (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-[300px] justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          <Image
            src={previewUrl}
            alt="preview"
            width={150}
            height={150}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};