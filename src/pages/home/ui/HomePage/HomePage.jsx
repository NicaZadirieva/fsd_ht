import { Button, CloseButton, Graph, InfoBox, Tag, Tabs, Card } from "../../../../shared";



export function HomePage() {
	return (
        <>
            Главная
            Три вида кнопок
            <Button>Посмотреть</Button>
            <Button appearance="coloured">Посмотреть</Button>
            <Button appearance="shadowed">Посмотреть</Button>
            Со счетчиком
            <Button counter={10}>Посмотреть</Button>
            <Button counter={10} appearance="coloured">Посмотреть</Button>
            <Button counter={10} appearance="shadowed">Посмотреть</Button>
            С иконкой
            <Button icon={"Updates"} counter={10} appearance="coloured">Обновления</Button>

            Кнопка закрытия
            <CloseButton/>

            Карточки
            <Card onMoreClick={() => {}} attributeDesc={"Баллов"} attributeValue={"3 500"} icon={"StatisticsBonuses"}/>
            <Card onMoreClick={() => {}} attributeDesc={"Уровень навыков"} attributeValue={"33%"} icon={"Skills"}/>


            
            <Card attributeDesc={"Дней без перерывов"} attributeValue={"10"} icon={"StudyTime"}/>
            <Card attributeDesc={"Пройдено уроков"} attributeValue={"10"} icon={"DoneLessons"}/>
            <Card attributeDesc={"Получено достижений"} attributeValue={<>8<span>/11</span></>} icon={"Achievements"}/>
        
            <Graph/>

            <Tag appearance="coloured">33%</Tag>
            <Tag appearance="shadowed">Старт курса 15.04.2024</Tag>
            <Tag appearance="outlined">Профессия</Tag>

            <Tag appearance="outlined" icon={"Star"}>4.9</Tag>


            <InfoBox onShow={() => {}} onClose={() => {}} text={"Мы подвели для вас итоги года обучения! Посмотрите, что было в этом году."}/>
            <Tabs 
            actions={[
                {
                    key: 'my-courses',
                    onClick: () => {},
                    counter: 3,
                    text: "Мои курсы"
                },
                {
                    key: 'recommended-courses',
                    onClick: () => {},
                    counter: 3,
                    text: "Рекомендуемые"
                },
                {
                    key: 'all-courses',
                    onClick: () => {},
                    text: "Все курсы",
                    counter: 30
                }
            ]}
            />
        </>
    );
}