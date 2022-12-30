import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Taskit-${title}`;
  }, [title]);
};

export default useTitle;
