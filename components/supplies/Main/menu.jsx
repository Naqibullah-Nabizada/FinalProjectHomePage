import MainIcons from "./menuIcon";
import Link from "next/link";

const TitlesRestructure = (props) => {
  const { href, content, iconName } = props;
  return (
    <Link href={href} className="btn btn-outline-dark flex justify-start mb-2">
      <MainIcons name={iconName}/>
      <p className="flex items-center">{content}</p>
    </Link>
  );
};
export default TitlesRestructure;
