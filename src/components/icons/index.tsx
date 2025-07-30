import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const NextButton = () => {
    return (
      <svg width="80" height="61" viewBox="0 0 80 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="1.41602" width="78.5" height="58.5" rx="29.25" stroke="#33CCCC" strokeWidth="1.5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M43.4208 20.6156C43.909 20.1275 44.7004 20.1275 45.1886 20.6156L54.1195 29.5466C54.7379 30.1649 54.7379 31.1674 54.1195 31.7858L45.1886 40.7167C44.7004 41.2049 43.909 41.2049 43.4208 40.7167C42.9326 40.2286 42.9326 39.4371 43.4208 38.949L50.4536 31.9162H26.8047C26.1143 31.9162 25.5547 31.3565 25.5547 30.6662C25.5547 29.9758 26.1143 29.4162 26.8047 29.4162H50.4536L43.4208 22.3834C42.9326 21.8952 42.9326 21.1038 43.4208 20.6156Z" fill="#33CCCC"/>
</svg>

    )
}