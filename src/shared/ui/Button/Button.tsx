'use client';

import s from './Button.module.scss';
import {ShoppingCart} from "../../../../public/icons";
import clsx from "clsx";

export default function Button({classname}: {classname?: string}) {
    return (
        <button className={clsx(s.container, classname)}>
            <ShoppingCart/>
            Стать партнером
        </button>
    );
};
