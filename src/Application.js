import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

const Application = () => {
    return (
        <div className="wrapper">
            Application
            <Header navigationList={['Home', 'About us', 'Contact us', 'Help page']}/>
            <main>
                <Section titleList = {[
                    {
                        title: '15 полезных однострочных выражений JavaScript',
                        text: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
                    },
                    {
                        title: 'Полиморфизм простыми словами',
                        text: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
                    },
                    {
                        title: 'Начало работы с Node',
                        text: 'Node Hero: Глава 1',
                    },
                    {
                        title: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
                        text: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
                    },
                    {
                        title: '8 практичных хитростей веб-разработчика применить немедленно!',
                        text: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
                    },
                    {
                        title: 'Насколько JavaScript сильный?',
                        text: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
                    },
                    {
                        title: 'Изучите CSS-переменные за 5 минут',
                        text: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
                    },
                    {
                        title: 'Создание MEVN-приложения (Часть 1/2)<',
                        text: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
                    },
                    {
                        title: 'Реактивность Vue.js',
                        text: 'Реактивность фреймворка Vue.js и использование метода Vue.set',
                    },
                    {
                        title: 'Микроптимизации производительности и JavaScript',
                        text: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
                    },
                    {
                        title: 'Девшахта-подкаст',
                        text: '#108: Производительность кода — это важнейший критерий качества?',
                    },
                    {
                        title: 'Одна из самых красивых идей в информатике: Y-Combinator',
                        text: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
                    },
                    ]} />
            </main>
            <Footer/>
        </div>);
};

export default Application;
