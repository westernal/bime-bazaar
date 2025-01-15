import Styles from "./styles.module.css";

interface CarInfoListItemProps {
  title: string;
  info: string;
}

const CarInfoListItem = ({ title, info }: CarInfoListItemProps) => {
  return (
    <div className={Styles.item}>
      <dt className={Styles.title}>{title}</dt>
      <hr className={Styles.line} />
      <dd className={Styles.info}>{info}</dd>
    </div>
  );
};

export default CarInfoListItem;
