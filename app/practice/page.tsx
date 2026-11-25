
import InteractiveList from "./InteractiveList";

export default function PracticePage() {
    const lessons = [
        { id: 1, day: "Понеділок", subject: "Python", room: "101" },
        { id: 2, day: "Вівторок", subject: "Бази даних", room: "202" },
        { id: 3, day: "Середа", subject: "Англійська мова", room: "103" },
        { id: 4, day: "Четвер", subject: "Next.js", room: "204" },
        { id: 5, day: "П'ятниця", subject: "Комп'ютерні мережі", room: "105" },
        { id: 6, day: "Понеділок", subject: "React", room: "106" }
    ];

    return (
        <main>
            <h1>Розклад занять</h1>
            <p>Усього занять: {lessons.length}</p>

            <InteractiveList items={lessons} />
        </main>
    );
}
