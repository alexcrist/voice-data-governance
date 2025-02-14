import { useSelector } from "react-redux";
import Card from "../Card/Card";
import CountryInfo from "../CountryInfo/CountryInfo";
import InfoCardResizeHandle from "../InfoCardResizeHandle/InfoCardResizeHandle";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import StateInfo from "../StateInfo/StateInfo";
import styles from "./InfoCard.module.css";

const InfoCard = () => {
    const focusedCountry = useSelector((state) => state.main.focusedCountry);
    const focusedState = useSelector((state) => state.main.focusedState);
    const menuWidthPx = useSelector((state) => state.main.menuWidthPx);
    let content;
    if (focusedState) {
        content = <StateInfo />;
    } else if (focusedCountry) {
        content = <CountryInfo />;
    } else {
        content = <ProjectInfo />;
    }
    return (
        <Card style={{ width: `${menuWidthPx}px` }}>
            <InfoCardResizeHandle />
            <div className={styles.header}>
                <div className={styles.headerAccent} />
                <div className={styles.headerTexts}>
                    <h1 className={styles.headerText}>
                        Global Voice Datasets Repository Map
                    </h1>
                    <h3 className={styles.subheaderText}>
                        Accessibility, Licensing, and Research Ethics
                    </h3>
                </div>
                <div className={styles.headerAccent} />
            </div>
            <div className={styles.content}>{content}</div>
        </Card>
    );
};

export default InfoCard;
