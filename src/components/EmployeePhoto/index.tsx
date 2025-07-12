import { useEffect, useState } from "react";
import "./styles.css";

type Props = {
  name: string;
  image: string;
};

const EmployeePhoto = ({ name, image }: Props) => {
  const [hasImage, setHasImage] = useState(false);

  const getInitials = (name: string) => {
    const [first, second] = name.split(" ");
    return (first?.[0] || "") + (second?.[0] || "");
  };

  useEffect(() => {
    if (!image || image.trim() === "") {
      setHasImage(false);
      return;
    }

    const img = new Image();
    img.src = image;
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, [image]);

  if (!hasImage) {
    return (
      <div className="avatar-fallback">
        {getInitials(name).toUpperCase()}
      </div>
    );
  }

  return <img src={image} alt={name} />;
};

export default EmployeePhoto;
