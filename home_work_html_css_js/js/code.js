var numJob = prompt('Для перевірки домашнього завдання JavaScript, будь ласка, введіть номер завдання (ціле число від 1 до 4) яке б ви хотіли перевірити')
switch (numJob) {
    case '1':
        /* ЗАВДАННЯ-1. Дано змінні a і b. 
        Перевірте, що "a" ділиться без залишку на "b". 
        Якщо це так - виведіть 'Ділиться' і результат поділу, 
        інакше виведіть 'Ділиться з залишком' та залишок від поділу. */
        alert("ЗАВДАННЯ - 1. Дано змінні A і B. Перевірте, що A ділиться без залишку на B.  Якщо це так - виведіть 'Ділиться' і результат поділу, інакше виведіть 'Ділиться з залишком' та залишок від поділу. натисніть ОК що бі продовжити")
        document.write("ЗАВДАННЯ-1 <br> Дано змінні A і B.<br> Перевірте, що A ділиться без залишку на B.<br> Якщо це так - виведіть 'Ділиться' і результат поділу, <br> інакше виведіть 'Ділиться з залишком' та залишок від поділу.")
        document.write('<br>')
        document.write('<br>')

        let a = prompt('Введіть значення (ділене) А')
        let b = prompt('Введіть значення (дільник) B')
        var c = a % b
        document.write('ви ввели ділене (А =' + a + ')<br>дільник (В=' + b + ')<br>результат: ')
        if (a < b) {
            document.write('Якщо ділять менше на більше, у приватному завжди виходить 0 (нуль), а залишку виходить поділене.(залишок = ' + c + ')')
        }
        else {
            if (Math.floor(a % b) === 0) {
                document.write('Ділиться (результат діленя = ' + a / b + ')')
            }
            else {
                document.write('Ділиться з залишком (залишок = ' + c + ')')
            }
        }
        document.write('<br>')
        break


    /* ЗАВДАННЯ-2. "Намалюйте" в консолі прямокутний трикутник 
    із зірочок (або плюсиків, або якогось іншого символу): 
    на першому рядку - одна зірочка, на другому дві, і так далі.
    Рішення оформіть у вигляді функції, куди передаються два 
    параметри: висота трикутника та символ, яким його потрібно 
    "малювати". Наприклад:
    drawTriangle(5,*); 
    * 
    ** 
    *** 
    **** 
    ****** 
    ---
    */
    case '2':
        alert('ЗАВДАННЯ - 2. Намалюйте в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другому дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно малювати. Наприклад: drawTriangle(5,*)')
        document.write('ЗАВДАННЯ - 2.<br>"Намалюйте" в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): <br>на першому рядку - одна зірочка, на другому дві, і так далі. <br>Рішення оформіть у вигляді функції, куди передаються два параметри: <br>висота трикутника та символ, яким його потрібно "малювати". <br>Наприклад: drawTriangle(5,*)')
        document.write('<br>')
        document.write('<br>')
        var height = prompt('Введіть число, яке визначаєте висоту трикутника')
        var symbol = prompt('Введіть символ з якого ви бажаєте скласти трикутник')

        console.log(x)
        var x = triangleFun(height, symbol)

        function triangleFun(a, b) {
            var star = '';
            for (var i = 0; i < a; i++) {
                star = star + b
                document.write(star+'<br>')
            }
        }


        document.write('<br>')
        break

    case '3':
        /* ЗАВДАННЯ-3. Виведіть в консоль 
        непарні числа у проміжку від 0 до 100.*/
        alert('ЗАВДАННЯ-3. Виведіть в консоль непарні числа у проміжку від 0 до 100. ')
        document.write('ЗАВДАННЯ - 3.<br>Виведіть в консоль непарні числа у проміжку (наприклад) від 0 до 100')

        document.write('<br>')
        document.write('<br>')
        var numStart = prompt('введіть ЧИСЛО - початкове значення від якого починати розрахуйте непарних чисел')
        var numFinish = prompt('введіть ЧИСЛО - кінцеве значення до якого вважати непарні чіала')

        var str = '';
        var range = (Math.ceil(numFinish))
        var start = (Math.ceil(numStart))

        for (var i = start; i <= range; i++) {
            if (i % 2 === 0) {
                continue
            }
            if (i < (range - 1)) {
                str = str + (i + ', ')
            }
            else {
                str = str + (i + '.')
            }
        }
        document.write('Непарні числа у проміжку від ' + numStart + ' до ' + numFinish + ' : ' + str)

        break


    case '4':
        /* ЗАВДАННЯ-4. Дано число n = 1000. Поділіть його на 2 стільки разів, поки результат поділу не буде меньше 50. Яке число вийде? Порахуйте кількість ітерацій, необхідних для цього. */
        alert('ЗАВДАННЯ - 4. Дано число n = 1000. Поділіть його на 2 стільки разів, поки результат поділу не буде меньше 50. Яке число вийде? Порахуйте кількість ітерацій, необхідних для цього.')
        document.write('ЗАВДАННЯ - 4.<br>Програма надає результат поділу та кількості ітерацій поділу введеного чила на 2, поки залишок не стане меншим за 50.')
        document.write('<br>')
        document.write('<br>')

        var divNumb = prompt('Програма надає результат поділу та кількості ітерацій поділу введеного чила на 2, поки залишок не стане меншим за 50. Введіть будь-ласка число (наприклад 1000)')
        document.write('Ви ввели число: ' + divNumb)
        document.write('<br>')
        document.write(resFun(divNumb))

        function resFun(a) {
            var iteration = 0;
            for (var i = 1; i < a; i++) {

                if (a > 50) {
                    a = a / 2
                    iteration = ++iteration
                }

                else {
                    continue
                }
                /* console.log (iteration, a) - результат кожної ітерації */
            }
            return ('Кількість ітерацій: ' + iteration + ' Результат поділу: ' + a)
        }

        console.log('-----------------------------------------------------')
        break
} /* эта скобка закрывет функцию switch */