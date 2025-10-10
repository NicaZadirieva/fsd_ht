import { Button } from "../../../../shared";

export function HomePage() {
	return (
        <div>
            Главная
            Три вида кнопок
            <Button>Посмотреть</Button>
            <Button appearance="coloured">Посмотреть</Button>
            <Button appearance="shadowed">Посмотреть</Button>
        </div>
    );
}