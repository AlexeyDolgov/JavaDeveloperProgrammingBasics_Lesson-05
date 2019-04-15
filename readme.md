# JavaDeveloperProgrammingBasics_Lesson-05
Methods and properties, Numbers, Strings

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-05/blob/master/JavaDeveloperProgrammingBasics_Lesson-05/task5_1/task5_1.js)<br>
Напишіть функцію `getDecimal(num)`, яка повертає дробну частину числа. Намагайтесь не використовувати `toFixed()`.

        getDecimal(12.345); // 0.345
        getDecimal(1.2); // 0.2
        getDecimal(-1.2); // 0.2

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-05/blob/master/JavaDeveloperProgrammingBasics_Lesson-05/task5_2/task5_2.js)<br>
Напишіть функцию `randomInteger(min, max)`, яка має генерувати випадкове ціле число між `min` та `max`, включаючи `min` та `max` як
можливі значення.

        randomInteger(10, 20)

* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-05/blob/master/JavaDeveloperProgrammingBasics_Lesson-05/task5_3/task5_3.js)<br>
Напишіть функцію `ucFirst(str)`, яка повертає рядок `str` з великою першою літерою.

        ucFirst("вася"); // "Вася"
        ucFirst(""); // "" (немає помилок при порожньому рядку)

* [Завдання 4](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-05/blob/master/JavaDeveloperProgrammingBasics_Lesson-05/task5_4/task5_4.js)<br>
Напишіть функцію `checkSpam(str)`, яка повертає `true`, якщо рядок `str` містить *"viagra"* або *"XXX"*, а інакше `false`. Функція
повинна бути нечутлива до регістру.

        checkSpam("buy ViAgRA now"); // true
        checkSpam("free xxxxx"); // true
        checkSpam("innocent rabbit"); // false

* [Завдання 5](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-05/blob/master/JavaDeveloperProgrammingBasics_Lesson-05/task5_5/task5_5.js)<br>
Є вартість у вигляді рядка: `"$120"`. Тобто, першим йде знак валюти, а потім - число. Створіть функцію `extractCurrencyValue(str)`,
яка буде з такого рядка виділяти число-значення, в даному випадку `120`.

        extractCurrencyValue("$360"); // 360
