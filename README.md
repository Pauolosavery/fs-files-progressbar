## Ожидание загрузки файлов

Ты уже делал(а) задание c [прогрессбаром](https://github.com/Elbrus-Bootcamp/extra-algorithm-progressbar)? Если еще нет - рекомендуем к нему вернуться в свободное время!

Когда пользователь загружает страницу - данные с сервера поступают на клиент асинхронно и неравномерно. Давай смоделируем такое поведение при помощи файловой системы твоего проекта. Тебе предстоит написать progressbar, применимый не к статически заданному времени, а к размеру "загружаемых" файлов. К сожалению, ты пока не сможешь связать свою веб-версию прогрессбара (frontend/client) и работу с файлами (backend/server), однако прогрессбар можно реализовать в консольном виде.

### Release 0. Подготовка файлов
На этом этапе тебе необходимо создать минимум 10 файлов (чем больше - тем интереснее). Наполни эти файлы разным количеством информации. Это может быть одно слово или 20 страниц - все зависит от твоего интереса. Кстати, файлами могут быть даже картинки, но, желательно, чтобы они весили достаточно много. Помни, количество информации в каждом файле должно быть разным, чтобы у тебя получились файлы разного размера. Файлы не обязательно должны быть одинакового расширения.

**Совет:** создай файлы в отдельной директории, чтобы там кроме этих файлов ничего не находилось. На самом деле тебе предоставлена папка `files`, в которой уже есть примеры файлов. И будь аккуратнее, когда пытаешься открыть большие файлы - твой компьютер может зависнуть. Для создания файлов можно использовать команду `dd if=/dev/urandom of=filename.txt bs=500M count=1`.

### Release 1A. Работа с fs. Асинхронный вариант. 30 минут
А теперь зайди в директорию, где лежат твои текстовые файлы (`files`) и получи мета-информацию о них (общее количество, название, размер, даты создания и т.д.).

Тебе могут пригодиться следующие fs-методы:
- fs.readdir(path, callback)
- fs.stat(data, callback)
  - stats.isFile()
  - stats.isDirectory()

### Release 1B. Синхронный вариант

Тебе могут пригодиться следующие fs-методы:
- fs.readdirSync(path)
- fs.statSync(path)
  - stats.isFile()
  - stats.isDirectory()
  
Очень хорошо, если ты смог сделать на асинхронном варианте.

### Release 2. Progressbar
Наконец, на основании полученых размеров файлов, реализуй свой progressbar. Твой прогрессбар будет заполняться до общего размера всех имеющихся файлов. Если у тебя есть файл, размером 5Кб при общем размере всех файлов - 10 Кб, то твоя полоса загрузки после обработки такого файла должна заполниться на 50% (100% * (5Кб / 10Кб))

Сделай полосу загрузки(progressbar) в **Консоли Терминала**. Не в браузере! Она должна увеличиваться с каждым новым загруженным файлом.

### Release 3. Зачем же асихронно? (Опционально)

Возможно, ты сделал задание, но так и не понял зачем нужны были асинхронные методы. В таком случае давай сделаем приложение более реалистичным. При запуске программы будет открываться интерактивная консоль. Если ты нажмёшь на любую кнопку на клавиатуре, то консоль напишет тебе: `You pressed the "x" key`. Своего рода минимальное взаимодействие приложения с пользователем. А теперь запусти свою загрузку файлов. Если твоя реализация асинхронна, то ты, может быть, даже не почувствуешь, что программа что-то пытается загрузить. А вот если ты используешь синхронные методы... Тогда ты будешь очень недоволен, что программа так долго не реагирует на твои интенсивные нажатия на кнопки.

## Вывод

Асинхронность - это хорошо. Учись работать с ней, люби её и не обижай!
