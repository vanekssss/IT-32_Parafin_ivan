
"use client";

import { useState } from "react";

type Lesson = {
    id: number;
    day: string;
    subject: string;
    room: string;
};

export default function InteractiveList({ items }: { items: Lesson[] }) {
    const [selectedDay, setSelectedDay] = useState("Усі дні");
    const [showRooms, setShowRooms] = useState(true);

    const filteredLessons = items.filter((lesson) =>
        selectedDay === "Усі дні" || lesson.day === selectedDay
    );

    return (
        <div>
            <h2>Список занять</h2>

            <label>Оберіть день: </label>

            <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
            >
                <option value="Усі дні">Усі дні</option>
                <option value="Понеділок">Понеділок</option>
                <option value="Вівторок">Вівторок</option>
                <option value="Середа">Середа</option>
                <option value="Четвер">Четвер</option>
                <option value="П'ятниця">П'ятниця</option>
            </select>

            <br /><br />

            <button onClick={() => setShowRooms(!showRooms)}>
                {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
            </button>

            <ul>
                {filteredLessons.length > 0 ? (
                    filteredLessons.map((lesson) => (
                        <li key={lesson.id}>
                            {lesson.day} — {lesson.subject}
                            {showRooms && ` — Аудиторія: ${lesson.room}`}
                        </li>
                    ))
                ) : (
                    <p>Нічого не знайдено</p>
                )}
            </ul>
        </div>
    );
}
