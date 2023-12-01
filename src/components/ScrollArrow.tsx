import { ArrowButton } from "./arrowbutton/ArrowButton";

export const ScrollArrow = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ArrowButton
      className="mt-8"
      onClick={() => scrollToSection("secondContainer")}
    />
  );
};
