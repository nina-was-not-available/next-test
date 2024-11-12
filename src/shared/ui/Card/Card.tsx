import s from './Card.module.scss';
import {Mock} from "@/shared/types/mock";
import clsx from "clsx";
import Image from "next/image";

type Props = {
    num: number;
    card: Mock;
}

export default function Card({num, card}: Props) {
    return (
        <div className={clsx(s.gradientBorder, s[card.value])}>
            <div className={clsx(s.content, s[`${card.value}Content`])}>
                <div className={s.textContent}>
                    <div className={clsx(s.gradientCircleBorder, s[`${card.value}CircleBorder`])}>
                        <div className={clsx(s.circleContent, s[`${card.value}CircleContent`])}>{num}</div>
                    </div>
                    {card.desc}
                </div>
                <Image src={card.image} alt={''} width={0} height={0} className={s.image}/>
            </div>
        </div>
    );
};
