import { Button, CloseButton } from "../../../../shared";
import { Card } from "../../../../shared/ui/Card/Card";


export function HomePage() {
	return (
        <div>
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
        </div>
    );
}