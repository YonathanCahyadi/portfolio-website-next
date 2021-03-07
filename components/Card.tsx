import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <div className="card-container">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </Link>
  );
};

export default Card;
