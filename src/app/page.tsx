import s from "./page.module.scss";
import React from 'react';
import Card from "@/shared/ui/Card/Card";
import {Mock} from "@/shared/types/mock";
import {Arrow} from "../../public/icons";
import {BlueCardImage, GreenCardImage, PinkCardImage} from "../../public/images";
import Button from "@/shared/ui/Button/Button";


const mocks: Mock[] = [
    {
        value: 'blue',
        desc: 'Получите партнерскую ссылку',
        image: BlueCardImage,
    },
    {
        value: 'pink',
        desc: 'Расскажите о IIII.COM',
        image: PinkCardImage,
    },
    {
        value: 'green',
        desc: "Получайте хороший процент от покупок по вашей ссылке!",
        image: GreenCardImage,
    },
]

export default async function Home() {
    return (
        <div className={s.page}>
            <div className={s.content}>
                <h3>Зарабатывайте вместе с нами!</h3>
                <div className={s.container}>
                    {mocks.map((el, i) => (
                        <div key={i} className={s.cardContainer}>
                            <Card card={el} num={i + 1}/>
                            {i !== 0 && <Arrow/>}
                        </div>
                    ))}
                </div>
                <Button classname={s.buttonContainer}/>
            </div>
        </div>
    );
};

